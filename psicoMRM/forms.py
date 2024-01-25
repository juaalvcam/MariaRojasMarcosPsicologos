from django import forms


class BlogForm(forms.Form):
    titulo = forms.CharField(max_length=100, required=True, label="Título",
                             help_text="Introduce un título para el artículo.", widget=forms.TextInput)
    descripcion = forms.CharField(
        label="Descripción", help_text="Introduce una descripción para el artículo.", max_length=1000, widget=forms.Textarea)
    imagen = forms.ImageField(widget=forms.FileInput, label="Imagen",
                              help_text="Introduce una imagen para el artículo.")
