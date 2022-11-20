from typing import List, Union

from pydantic import BaseModel


class AdminBase(BaseModel):
    email: str


class AdminCreate(AdminBase):
    password: str


class Admin(AdminBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True
