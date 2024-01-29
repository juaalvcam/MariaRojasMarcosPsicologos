from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("blog/", views.blog, name="blog"),
    # GESTION DE USUARIOS
    path("register/", views.register, name="register"),
    path("login/", views.user_login, name="login"),
    path("logout/", views.logout_session, name="logout")
]
