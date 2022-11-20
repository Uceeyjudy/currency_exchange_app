import uvicorn

from fastapi import FastAPI
from .api.v1 import getcurrency
from app.api.v1 import api_router
from app.core import settings

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_V1_STR)
app.include_router(getcurrency.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
