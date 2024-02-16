from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("blog/", views.blog, name="blog"),
    path("servicios", views.servicios, name="servicios"),
    # GESTION DE USUARIOS
    path("register/", views.register, name="register"),
    path("login/", views.user_login, name="login"),
    path("logout/", views.logout_session, name="logout")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
