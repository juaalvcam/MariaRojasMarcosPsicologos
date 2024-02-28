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
    path("servicios/", views.servicios, name="servicios"),
    path("servicios/terapia/individual/",
         views.terapia_individual, name="terapia_individual"),
    path("servicios/terapia/pareja/",
         views.terapia_pareja, name="terapia_pareja"),
    path("servicios/terapia/",
         views.terapia, name="terapia"),
    path("servicios/estres/",
         views.estres, name="estres"),
    path("servicios/coaching/",
         views.coaching, name="coaching"),
    # GESTION DE USUARIOS
    path("register/", views.register, name="register"),
    path("login/", views.user_login, name="login"),
    path("logout/", views.logout_session, name="logout")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
