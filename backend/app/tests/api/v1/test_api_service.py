from typing import Dict

from fastapi.testclient import TestClient

from app.core import settings


def test_get_currency_rates_from_external_apis(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/service/rates")
    data = response.json()
    assert response.status_code == 200
    assert data["success"] == True
