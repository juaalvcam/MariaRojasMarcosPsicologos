from django.contrib import admin
from .models import Articulo

# Register your models here.
admin.site.site_header = "PsicoMRM"
admin.site.site_title = "PsicoMRM"
admin.site.index_title = "Panel de administración"
admin.site.register(Articulo)
