from django.shortcuts import render

from .models import Opiniones


def index(request):
    return render(request, "index.html", {"opiniones": Opiniones.objects.all()})
