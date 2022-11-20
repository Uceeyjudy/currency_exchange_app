# Helper functions to make things easier
# Created by @alisani081

import asyncio
from typing import Any, Dict, List, Optional
import aiohttp
import requests
from app.schemas import BinanceRequestSchema, BinanaceResponseSchema

binancep2p_endpoint = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search"
official_rate_endpoint = 'https://api.exchangerate.host/latest'
request_headers = {"Cache-Control": "no-cache", "Content-Type": "application/json"}


async def make_aync_post_request(
    session: aiohttp.ClientSession, url, data: Dict[str, Any], headers=request_headers
):
    async with session.post(url, json=data, ssl=True, headers=headers) as resp:
        payload = await resp.json()
        return payload


async def get_binancep2p_rate(currency_code: str) -> Optional[Dict[str, Any]]:
    """
    `currency_code`: 3 letter code
    """
    d1 = BinanceRequestSchema(fiat=currency_code, tradeType="sell").dict()
    d2 = BinanceRequestSchema(fiat=currency_code, tradeType="buy").dict()
    async with aiohttp.ClientSession() as session:
        tasks = []
        for data in [d1, d2]:
            tasks.append(
                asyncio.ensure_future(
                    make_aync_post_request(session, binancep2p_endpoint, data)
                )
            )

        results = await asyncio.gather(*tasks)
        return results


async def format_binance_response_data(response_data: List[Dict[str, Any]]) -> Any:
    """
    Takes a Binance p2p endpoint response and extract the rates.
    """
    formatted_data = []
    for d in response_data:
        formatted_data.append(BinanaceResponseSchema(**d).dict())

    # Get the BUY Data and [5] being the average.
    buy_data = formatted_data[1]["data"][5]

    # Get the SELL Data and [5] being the average.
    sell_data = formatted_data[0]["data"][5]

    buy_rate = buy_data["adv"]["price"]
    sell_rate = sell_data["adv"]["price"]

    return {"buy_rate": buy_rate, "sell_rate": sell_rate}


def make_official_rate_request(base_currency: str, currency_list: List[str]) -> Any:
    currencies = ','.join(currency_list)
    url = f"{official_rate_endpoint}?base={base_currency}&symbols={currencies}"
    response = requests.get(url)
    data = response.json()
    return data
