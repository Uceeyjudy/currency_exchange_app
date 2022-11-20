from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db
from app.models.currency import Currency


router = APIRouter()

#endpoint to return list of all currencies from the db
@router.get("/currencies/",tags=["currency"],response_model=List[schemas.Currency])
async def get_currency(skip: int = 0, limit: int = 100,db: Session = Depends(get_db)):
    currencies = crud.currency.get_multi(db, skip= skip, limit = limit)
   
    return currencies