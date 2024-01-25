from django.shortcuts import render
from django.db import IntegrityError
from django.conf import settings

from .models import Opiniones, Articulo
from .scrapping import populate
from .forms import BlogForm


def index(request):
    populate()
    return render(request, "index.html", {"opiniones": Opiniones.objects.all().order_by("-fecha")[:6]})


def about(request):
    return render(request, "about.html")


def blog(request):
    form = BlogForm()
    lista = []  # lista para ir añadiendo los artículos
    articulos = Articulo.objects.all()
    if request.method == "POST":
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            imagen = form.cleaned_data["imagen"]
            print(imagen)
            try:
                articulo = Articulo.objects.create(
                    titulo=form.cleaned_data["titulo"],
                    descripcion=form.cleaned_data["descripcion"],
                    imagen=imagen
                )
                lista.append(articulo)
            except IntegrityError:
                form.add_error('titulo', 'Este título ya existe.')
                return render(request, "blog.html", {"articulos": lista, "form": form, 'STATIC_URL': settings.STATIC_URL})
        return render(request, "blog.html", {"articulos": articulos, "form": form, 'STATIC_URL': settings.STATIC_URL})
    else:
        return render(request, "blog.html", {"articulos": articulos, "form": form, 'STATIC_URL': settings.STATIC_URL})
