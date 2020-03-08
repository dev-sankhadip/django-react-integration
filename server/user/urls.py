from django.urls import path, include
from .views import RegistrationView, LoginView
from knox import views as KnowViews


urlpatterns=[
    path('api/auth', include('knox.urls')),
    path('api/auth/signup', RegistrationView.as_view()),
    path('api/auth/login', LoginView.as_view()),
    path('api/auth/logout', KnowViews.LogoutView().as_view(),name='knox_logout')
]