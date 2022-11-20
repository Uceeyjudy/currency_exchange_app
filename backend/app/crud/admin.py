from typing import Optional, List

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.admin import Admin
# from app.schemas.currency import Currency as currency_schema
from app.schemas.admin import AdminCreate, AdminUpdate


class CRUDAdmin(CRUDBase[Admin, AdminCreate, AdminUpdate]):
    # Declare model specific CRUD operation methods.
    pass


currency = CRUDAdmin(Admin)
