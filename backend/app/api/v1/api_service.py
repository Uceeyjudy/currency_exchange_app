import logging
from typing import Any

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.utils import get_binancep2p_rate, format_binance_response_data, make_official_rate_request
from app.models import Rate, Currency
from datetime import datetime

router = APIRouter()


@router.get("/rates")
async def get_currency_rates_from_external_apis(db: Session = Depends(get_db)) -> Any:
    """
    This endpoint gets exchange rates from third-party API's and update the database. 
    Cron-job.org (https://cron-job.org/) calls this endpoint every 2 hours to update the rates.
    Base Currency: `USD`
    """
    base_currency = "USD"
    currency_list = []
    try:
        all_currencies =  db.query(Currency).all()
        for currency in all_currencies:
            currency_list.append(currency.isocode)
            currency_code = currency.isocode
            resp_data = await get_binancep2p_rate(currency_code)
            formatted_data = await format_binance_response_data(resp_data)
            official_rate = make_official_rate_request(
                base_currency=base_currency, currency_list=currency_list)
            parallel_buy, parallel_sell = formatted_data["buy_rate"], formatted_data["sell_rate"]
            official_buy, official_sell = official_rate["rates"][currency_code], official_rate["rates"][currency_code],

            rate_obj = Rate(currency_id=currency.id, official_buy=official_buy, official_sell=official_sell,
                            parallel_buy=parallel_buy, parallel_sell=parallel_sell, last_updated=datetime.now())
            db.add(rate_obj)
            db.commit()

        return {
                "success": True,
                "message": f"Rates updated successfully.",
            }
    except Exception as e:
        logging.error(e)
        return {"success": False, "message": "Unable to update rates"}
