from django.shortcuts import render

from .models import Opiniones
from .scrapping import populate


def index(request):
    populate()
    return render(request, "index.html", {"opiniones": Opiniones.objects.all().order_by("-fecha")[:6]})
