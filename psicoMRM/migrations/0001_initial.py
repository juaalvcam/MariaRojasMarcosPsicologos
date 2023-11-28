# Generated by Django 4.2.7 on 2023-11-28 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Opiniones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valoracion', models.PositiveIntegerField()),
                ('nombre', models.CharField(max_length=50)),
                ('fecha', models.DateField()),
                ('comentario', models.TextField(max_length=1000)),
            ],
        ),
    ]
