from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.management import call_command
from .models import Articulo


@receiver(post_save, sender=Articulo)
def collect_static_on_save(sender, instance, created, **kwargs):
    if created:
        call_command('collectstatic', interactive=False)
