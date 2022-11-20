from .session import engine
from . import base
from sqlalchemy.orm import Session


def initialise(db: Session) -> None:
    # Write database initialisation queries.
    base.Base.metadata.create_all(bind=engine)
    # pass
