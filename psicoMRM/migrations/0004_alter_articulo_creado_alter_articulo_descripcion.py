# Generated by Django 4.2.6 on 2024-05-25 11:38

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psicoMRM', '0003_alter_articulo_descripcion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='creado',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='articulo',
            name='descripcion',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
