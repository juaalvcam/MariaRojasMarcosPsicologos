# Generated by Django 4.2.6 on 2024-01-25 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psicoMRM', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Articulo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100, unique=True)),
                ('descripcion', models.TextField(max_length=1000)),
                ('imagen', models.ImageField(upload_to='articulos')),
            ],
        ),
    ]