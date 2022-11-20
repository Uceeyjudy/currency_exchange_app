from typing import Dict

from fastapi.testclient import TestClient

from app.core import settings



def test_history_rate(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/history/NGN")
    rates = response.json()
    assert response.status_code == 200
    assert len(rates) > 0