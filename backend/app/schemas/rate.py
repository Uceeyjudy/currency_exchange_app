from typing import Optional, Any

from pydantic import BaseModel


class RateBase(BaseModel):
    official_buy: float
    official_sell: float
    parallel_buy: float
    parallel_sell: float
    last_updated: Any


class RateCreate(RateBase):
    pass


class Rate(RateBase):
    id: int
    currency_id: int
    class Config:
        orm_mode = True
