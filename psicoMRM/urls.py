from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("blog/", views.blog, name="blog"),
    path("blog/<str:title>/", views.article_detail, name="article_detail"),
    # SERVICIOS
    path("servicios/adultos/", views.servicios_adultos, name="servicios_adultos"),
    path("servicios/parejas/", views.servicios_parejas, name="servicios_parejas"),
    path("servicios/adolescentes/", views.servicios_adolescentes,
         name="servicios_adolescentes"),
    path("servicios/ninos/", views.servicios_ninos, name="servicios_ninos"),
    path("servicios/otros/", views.servicios_otros, name="servicios_otros"),
    # GESTION DE USUARIOS
    path("register/", views.register, name="register"),
    path("login/", views.user_login, name="login"),
    path("logout/", views.logout_session, name="logout")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
