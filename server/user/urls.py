from django.urls import path, include
from knox import views as KnowViews

from .views import RegistrationView, LoginView, UserView


urlpatterns=[
    path('api/auth', include('knox.urls')),
    path('api/auth/signup', RegistrationView.as_view()),
    path('api/auth/login', LoginView.as_view()),
    path('api/auth/user', UserView.as_view()),
    path('api/auth/logout', KnowViews.LogoutView().as_view(),name='knox_logout')
]