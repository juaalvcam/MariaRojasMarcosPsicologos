from django import forms
from django.core.exceptions import ValidationError
import re
from ckeditor.fields import RichTextFormField

from .models import Articulo


class BlogForm(forms.ModelForm):
    class Meta:
        model = Articulo
        fields = ['titulo', 'descripcion', 'imagen']
        widgets = {
            'titulo': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': RichTextFormField(config_name='default'),
            'imagen': forms.FileInput(attrs={'class': 'form-control'})
        }


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


def validate_es_phone_number(value):
    pattern = r'^(?:(?:\+|00)34[\s.]*)?(?:\d[\s.]*){9}$'
    if not re.match(pattern, value):
        raise ValidationError(
            'El número de teléfono debe ser un número de teléfono válido de España.')


class ContactForm(forms.Form):
    TOPIC_CHOICES = [
        ('dudas', 'Dudas'),
        ('ofertas', 'Ofertas'),
        ('cita', 'Pedir cita'),
        ('otros', 'Otros'),
    ]

    tipo = forms.ChoiceField(choices=TOPIC_CHOICES)
    nombre = forms.CharField(max_length=100,
                             min_length=5,
                             widget=forms.TextInput,
                             required=True)
    numero_telefono = forms.CharField(max_length=15, required=True, validators=[
                                      validate_es_phone_number])
    nota = forms.CharField(widget=forms.Textarea,
                           required=True, max_length=1000)
