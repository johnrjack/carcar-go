import django
import os
import sys
import time
import json
import requests
from service_rest.models import AutomobileVO
sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something



def get_autos():
    response = requests.get("http://localhost:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
         AutomobileVO.objects.get_or_create(
            import_href= auto["href"],
            defaults={
            "color": auto["color"],
            "year": auto["year"],
            "vin": auto["vin"],
        })


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_autos()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(15)


if __name__ == "__main__":
    poll()
