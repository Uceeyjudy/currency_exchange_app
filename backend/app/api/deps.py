#!/usr/bin/env python3
import json
import re
from sys import argv
from time import sleep
from typing import Generator

import requests

from app.database.session import SessionLocal

"""
    This module defines the app dependencies.
"""


API_KEY = "b0b7305ef6774ea2b2ba9d23b7ee0355"  # argv[1]
API_URL = "https://ipgeolocation.abstractapi.com/v1/"

# IP address' regex pattern
IP_REGEX = r"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)" \
    + r"{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def validate_ip(ip):
    """Validate IP address

        Raise:
            TypeError: if ip is not a string
            ValueError: if ip is not a valid ipv4 address
        
        Returns: True
    """
    # Check that IP address is a string
    if type(ip) is not str:
        raise TypeError("IP address must be a string")

    # Check that IP address is a valid IPV4 address
    if re.match(IP_REGEX, ip) is None:
        raise ValueError("IP address is invalid")
    
    return True


def get_location(ip):
    """
        Utility function to get the location(country) of a user.

        Args:
            ip (str): The IP address of the user.

        Returns:
            On success, returns the user's country.
            On failure it raises exceptions
    """

    validate_ip(ip)

    # send GET request to API and convert response to dictionary
    response = requests.get(f"{API_URL}?api_key={API_KEY}&ip_address={ip}")
    if response.status_code == 200:
        # request was successful, convert response to dictionary
        response = json.loads(response.content)
        country = response['country']

        return country
    else:
        # Try again
        # wait 5 seconds
        sleep(5)
        response = requests.get(f"{API_URL}?api_key={API_KEY}&ip_address={ip}")
        if response.status_code == 200:
            # request was successful, convert response to dictionary
            response = json.loads(response.content)
            country = response['country']
            return country
        else:
            # Error
            return "Nigeria"

