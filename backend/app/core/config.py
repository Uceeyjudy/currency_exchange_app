import secrets

from pydantic import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api"
    PROJECT_NAME: str = "RealExchangeRates"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./realexchange_db.db"

    class Config:
        env_file = "env"


settings = Settings()
