# from typing import Dict

# from fastapi.testclient import TestClient

# from app.core import settings


# def test_create_product(client: TestClient):
#     response = client.get(f"{settings.API_V1_STR}/index")
#     assert response.status_code == 200
#     assert response.json() == {"message": "Hello World"}
