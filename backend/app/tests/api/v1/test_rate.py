from typing import Dict

from fastapi.testclient import TestClient

from app.core import settings



def test_read_currency(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/rate/NGN")
    rates = response.json()
    assert response.status_code == 200
    assert type(rates) == dict

