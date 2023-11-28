from django.db import models


class Opiniones(models.Model):
    valoracion = models.PositiveIntegerField()
    nombre = models.CharField(max_length=50)
    fecha = models.DateField()
    comentario = models.TextField(max_length=1000)
