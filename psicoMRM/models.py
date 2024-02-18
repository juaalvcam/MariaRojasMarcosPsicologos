from django.db import models


class Opiniones(models.Model):
    valoracion = models.PositiveIntegerField()
    nombre = models.CharField(max_length=50)
    fecha = models.DateField()
    comentario = models.TextField(max_length=1000)


class Articulo(models.Model):
    titulo = models.CharField(
        max_length=100, unique=True, null=False, blank=False)
    descripcion = models.TextField(max_length=7000)
    imagen = models.ImageField(
        upload_to="static/articulos", unique=True, null=False, blank=False)
    creado = models.DateField(auto_now=True)
