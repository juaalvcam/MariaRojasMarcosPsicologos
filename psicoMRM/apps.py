from django.apps import AppConfig


class PsicomrmConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'psicoMRM'

    def ready(self):
        import psicoMRM.signals
