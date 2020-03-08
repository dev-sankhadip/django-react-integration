from django.urls import path, include
from .views import RegistrationView



urlpatterns=[
    path('api/auth', include('knox.urls')),
    path('api/auth/signup', RegistrationView.as_view())
]