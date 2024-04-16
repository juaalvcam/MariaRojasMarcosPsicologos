from django import forms
from django.core.exceptions import ValidationError
import re


class BlogForm(forms.Form):
    titulo = forms.CharField(max_length=100, required=True, label="Título",
                             help_text="Introduce un título para el artículo.", widget=forms.TextInput)
    descripcion = forms.CharField(
        label="Descripción", help_text="Introduce una descripción para el artículo.", max_length=7000, widget=forms.Textarea)
    imagen = forms.ImageField(widget=forms.FileInput, label="Imagen",
                              help_text="Introduce una imagen para el artículo.")


def validate_email(value):
    if not re.match(r'^\w+([.-]?\w+)*@(gmail|hotmail|outlook)\.com$', value):
        raise ValidationError(
            'el email debe de ser de gmail, hotmail o outlook')


class RegisterForm(forms.Form):
    username = forms.CharField(
        label='Nombre de usuario',
        max_length=100,
        min_length=5,
        widget=forms.TextInput,
        required=True
    )
    email = forms.EmailField(
        label='Correo electrónico',
        max_length=100,
        widget=forms.EmailInput,
        required=True,
        validators=[validate_email]
    )
    password = forms.CharField(
        label='Contraseña',
        max_length=100,
        min_length=6,
        widget=forms.PasswordInput,
        required=True
    )
    first_name = forms.CharField(
        label='Nombre',
        max_length=100,
        min_length=3,
        widget=forms.TextInput,
        required=True
    )
    last_name = forms.CharField(
        label='Apellidos',
        max_length=100,
        min_length=3,
        widget=forms.TextInput,
        required=True
    )


class LoginForm(forms.Form):
    username = forms.CharField(label='Nombre de usuario', max_length=100,
                               min_length=6, widget=forms.TextInput, required=True)
    password = forms.CharField(label='Contraseña', max_length=100, min_length=6,
                               widget=forms.PasswordInput, required=True)
    

class ContactForm(forms.Form):
    TOPIC_CHOICES = [
        ('doubts', 'Dudas'),
        ('offers', 'Ofertas'),
        ('appointment', 'Pedir cita'),
        ('others', 'Otros'),
    ]

    name = forms.CharField(max_length=100)
    contact_number = forms.CharField(max_length=15)
    query = forms.CharField(widget=forms.Textarea)
    topic = forms.ChoiceField(choices=TOPIC_CHOICES)
