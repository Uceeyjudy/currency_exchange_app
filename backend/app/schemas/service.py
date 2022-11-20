from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel


class BinanceRequestSchema(BaseModel):
    proMerchantAds: bool = False
    page: int = 1
    rows: int = 11
    asset: str = 'USDT'
    fiat: Optional[str] = 'NGN'
    tradeType: str


class BinanceAdv(BaseModel):
    tradeType: str
    asset: str
    fiatUnit: str
    price: str
    fiatSymbol: str


class BinanceResponseData(BaseModel):
    adv: BinanceAdv


class BinanaceResponseSchema(BaseModel):
    data: List[BinanceResponseData]
