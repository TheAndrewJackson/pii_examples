import requests


user = "john doe"
requests.post(f"http://example.com/user?user_name={user}" )