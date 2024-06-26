from django.db import models
from ckeditor.fields import RichTextField


class Opiniones(models.Model):
    valoracion = models.PositiveIntegerField()
    nombre = models.CharField(max_length=50)
    fecha = models.DateField()
    comentario = models.TextField(max_length=1000)


class Articulo(models.Model):
    titulo = models.CharField(
        max_length=100, unique=True, null=False, blank=False)
    descripcion = RichTextField(config_name='default')
    imagen = models.ImageField(
        upload_to="static/articulos", unique=True, null=False, blank=False)
    creado = models.DateTimeField(auto_now=True)

    def delete(self, *args, **kwargs):
        self.imagen.delete()
        super().delete(*args, **kwargs)
