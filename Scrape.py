import requests

payload = { 'api_key': '623b3c794db6c7dca417aa923f334c6f', 'url': 'https://www.google.com/url?q=https://www.bigo.tv/user/petitlion18&usg=AOvVaw2Dfk_Ryxh_oGcgqO0hY7XT' }
r = requests.get('https://api.scraperapi.com/', params=payload)
print(r.text)
