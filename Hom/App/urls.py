from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
  
    path('', views.get_home),
    path('/1', views.get_home1),

]