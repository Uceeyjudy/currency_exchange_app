from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.currency import Currency
# from app.schemas.currency import Currency as currency_schema
from app.schemas.currency import CurrencyCreate, CurrencyUpdate


class CRUDCurrency(CRUDBase[Currency, CurrencyCreate, CurrencyUpdate]):
    # Declare model specific CRUD operation methods.
    def get_currency_by_isocode(self, db:Session, isocode:str) -> Any:
        return db.query(Currency).filter(Currency.isocode == isocode).first()
    
    def delete_currency_by_isocode(self, db:Session, isocode:str) -> dict:
        ''' This function deletes the currency associated with the isocode passed in.

            INPUT: isocode: str
            OUTPUT: {'status': True, 'message': 'Deleted!'}
        ''' 
        if len(isocode) == 0:
            return {'status': False, 'message': 'isocode cannot be empty!'}
        
        if type(isocode) != str:
            return {'status': False, 'message': 'isocode must be string!'}

        currency = self.get_currency_by_isocode(isocode = isocode)

        if currency == None:
            return {'status': False, 'message': 'Currency not found!'}
        
        db.delete(currency)
        db.commit()
        
        return {'status': True, 'message': 'Currency deleted!'}



currency = CRUDCurrency(Currency)
