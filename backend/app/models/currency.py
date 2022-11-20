from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.base_class import Base


class Currency(Base):
    __tablename__ = "currencies"

    id = Column(Integer, primary_key=True, index=True)
    country = Column(String, unique=True, index=True)
    isocode = Column(String, unique=True)
    symbol = Column(String, unique=True)

    rates = relationship(
        "Rate", back_populates="currency", cascade="all, delete")
