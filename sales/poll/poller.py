import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO
# Import models from sales_rest, here.
# from sales_rest.models import Something

def get_auto():
    response = requests.get("http://inventory-api:8100/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=auto["href"],
            color=auto["color"],
            year=auto["year"],
            vin=auto["vin"],
        )
    print(content)


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            print("::::::::::::")
            get_auto()
            print("::::::::::")
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
