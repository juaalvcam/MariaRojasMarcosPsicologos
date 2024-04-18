# BeautifulSoup imports
from bs4 import BeautifulSoup

# Models imports
from .models import Opiniones

# Others imports
import os
import urllib.request
import ssl
import re
import urllib.error
import datetime
import locale

# lineas para evitar error SSL
if (not os.environ.get('PYTHONHTTPSVERIFY', '') and
        getattr(ssl, '_create_unverified_context', None)):
    ssl._create_default_https_context = ssl._create_unverified_context


def populate():
    locale.setlocale(locale.LC_TIME, "es_ES")

    f = urllib.request.urlopen(
        "https://www.doctoralia.es/maria-rojas-marcos-asensi/psicologo/sevilla")
    s = BeautifulSoup(f, 'lxml')

    f2 = urllib.request.urlopen(
        "https://www.doctoralia.es/maria-rojas-marcos-asensi/psicologo/sevilla#profile-reviews")
    s2 = BeautifulSoup(f2, 'lxml')

    datos2 = s2.find("section", id="profile-reviews")

    # Obtenemos la valoracion
    valoracion = datos2.find(
        "div", class_="card-body pb-0").find("div", class_="rating rating-lg")["data-score"]

    # Obtenemos los nombres, fechas y comentarios
    datos3 = datos2.find(
        "div", class_="card-body opinions-list").div.find_all("div")

    for dato in datos3:
        etiqueta = dato.find("div", class_="media-body")
        if etiqueta is not None:
            nombre = etiqueta.span.text.strip()
            fecha_str = etiqueta.time.text.strip()
            fecha = datetime.datetime.strptime(
                fecha_str, "%d de %B de %Y").date()
            comentario = etiqueta.p.text.strip()

            # Guardamos los datos en la base de datos
            opinion, created = Opiniones.objects.get_or_create(
                valoracion=valoracion, nombre=nombre, fecha=fecha, comentario=comentario)
            opinion.save()
