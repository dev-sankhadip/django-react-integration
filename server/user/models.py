from django.db import models
from django.contrib.auth.models import User


# Create your models here.

User._meta.get_field('email')._unique = True

# class Profile:
#     userid=models.OneToOneField(User, on_delete=models.CASCADE)
#     phone=models.OneToOneField(User, on_delete=models.CASCADE)