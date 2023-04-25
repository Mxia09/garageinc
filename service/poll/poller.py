import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest
from service_rest.models import AutomobileVO

def get_automobiles():
    # Inventory is located at port 8100
    # response = requests.get("http://inventory-api:8000/api/automobiles/")
    response = requests.get("http://inventory-api:8000/api/automobiles/")

    content = json.loads(response.content)
    print("test poller")

    for auto in content["autos"]:
        # add new automobile to our automobile value object
        AutomobileVO.objects.update_or_create(import_href = auto["href"], defaults = {"vin": auto["vin"]})

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
