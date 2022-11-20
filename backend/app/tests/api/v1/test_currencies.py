from typing import Dict

from fastapi.testclient import TestClient

from app.core import settings


# def test_create_currency(client: TestClient, random_currencies: Dict[str, str]) -> None:
#     response = client.post(f"{settings.API_V1_STR}/currencies", json=random_currencies)
#     currencies = response.json()
#     assert response.status_code == 200
#     assert currencies.get("name") == random_currencies.get("name")
#     assert currencies.get("price") == random_currencies.get("price")


def test_read_currencies(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/currencies")
    currencies = response.json()
    assert response.status_code == 200
    assert len(currencies) > 0


# def test_update_currencies(client: TestClient, random_currencies: Dict[str, str]) -> None:
#     random_currencies["price"] = 100
#     response = client.put(f"{settings.API_V1_STR}/currenciess", json=random_currencies)
#     currencies = response.json()
#     assert response.status_code == 200
#     assert currencies.get("price") == random_currencies.get("price")


# def test_delete_currencies(client: TestClient, random_currencies: Dict[str, str]) -> None:
#     response = client.delete(f"{settings.API_V1_STR}/currenciess?id={random_currencies.get('id')}")
#     message = response.json()
#     assert response.status_code == 200
#     assert "message" in message
