#!/usr/bin/env python3
import unittest

from api.deps import get_location, validate_ip

"""Unit tests for get_location_currency module"""


class TestGetLocationCurrency(unittest.TestCase):
	def test_validate_ip_integer(self):
		with self.assertRaises(TypeError):
			validate_ip(24)
	
	def test_validate_ip_float(self):
		with self.assertRaises(TypeError):
			validate_ip(200.9)
	
	def test_validate_ip_invalid(self):
		with self.assertRaises(ValueError):
			validate_ip("102.296.01.11")
		with self.assertRaises(ValueError):
			validate_ip("102.216.201.1122")
	
	def test_validate_ip_valid(self):
		self.assertTrue(validate_ip("102.216.201.112"))
		self.assertTrue(validate_ip("204.44.112.40"))
	
	def test_get_location_currency_nigeria(self):
		self.assertEqual("Nigeria", get_location("102.216.201.112"))
	
	def test_get_location_currency_us(self):
		self.assertEqual("United States", get_location("204.44.112.40"))
