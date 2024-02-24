from django.shortcuts import render, redirect
from django.contrib.auth.decorators import user_passes_test
from django.db import IntegrityError
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User

# local imports
from .models import Opiniones, Articulo
from .scrapping import populate
from .forms import BlogForm, RegisterForm, LoginForm


def index(request):
    populate()
    return render(request, "index.html", {"opiniones": Opiniones.objects.all().order_by("-fecha")[:6], 'STATIC_URL': settings.STATIC_URL, 'articulo_mas_reciente': Articulo.objects.all().order_by("creado")[:1]})


def about(request):
    return render(request, "about.html")


# GESTIÓN DE USUARIOS
@user_passes_test(lambda u: u.is_anonymous, login_url='index')
def register(request):
    form = RegisterForm()
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            firstname = form.cleaned_data['first_name']

            if User.objects.filter(username__iexact=username).exists():
                form.add_error(
                    'username', 'El nombre de usuario ya existe')
                return render(request, 'registro.html', {'form': form})
            if User.objects.filter(email__iexact=email).exists():
                form.add_error(
                    'email', 'El email ya existe')
                return render(request, 'registro.html', {'form': form})
            if User.objects.filter(first_name__iexact=firstname).exists():
                form.add_error(
                    'first_name', 'El nombre ya existe')
                return render(request, 'registro.html', {'form': form})
            user = User.objects.create_superuser(
                username=username, email=email, password=form.cleaned_data['password'])

            user.first_name = firstname
            user.last_name = form.cleaned_data['last_name']
            user.save()
            user = authenticate(
                username=username, password=form.cleaned_data['password'])
            if user is not None:
                login(request, user)
                return redirect('index')
    return render(request, 'registro.html', {'form': form})


@user_passes_test(lambda u: u.is_anonymous, login_url='index')
def user_login(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data["password"]

            if not User.objects.filter(username=username).exists():
                form.add_error(
                    'username', 'El nombre de usuario no existe')
                return render(request, 'login.html', {'form': form})
            if not check_password(password, User.objects.get(username=username).password):
                form.add_error(
                    'password', 'La contraseña no es correcta')
                return render(request, 'login.html', {'form': form})
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')
    return render(request, 'login.html', {'form': form})


@user_passes_test(lambda u: u.is_authenticated, login_url='index')
def logout_session(request):
    logout(request)
    return redirect('index')


# BLOG
def blog(request):
    form = BlogForm()
    articulos = Articulo.objects.all().order_by("-creado")
    if request.method == "POST":
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            imagen = form.cleaned_data["imagen"]
            try:
                Articulo.objects.create(
                    titulo=form.cleaned_data["titulo"],
                    descripcion=form.cleaned_data["descripcion"],
                    imagen=imagen
                )
            except IntegrityError:
                form.add_error('titulo', 'Este título ya existe.')
                return render(request, "blog.html", {"articulos": articulos, "form": form, 'STATIC_URL': settings.STATIC_URL})
        return render(request, "blog.html", {"articulos": articulos, "form": form, 'STATIC_URL': settings.STATIC_URL})
    else:
        return render(request, "blog.html", {"articulos": articulos, "form": form, 'STATIC_URL': settings.STATIC_URL})


# SERVICIOS
def servicios_adultos(request):
    return render(request, "servicios_adultos.html")

def servicios_parejas(request):
    return render(request, "servicios_parejas.html")

def servicios_adolescentes(request):
    return render(request, "servicios_adolescentes.html")

def servicios_ninos(request):
    return render(request, "servicios_ninos.html")

def servicios_otros(request):
    return render(request, "servicios_otros.html")