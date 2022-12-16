from django.urls import path
from .api import ListaApiView, TaskApiView
from . import views

urlpatterns = [
    path('', views.homePage, name="home"),
    path("lists/", ListaApiView.as_view()),
    path("tasks/", TaskApiView.as_view()),
    path("list/<listName>", views.lists, name="list"),
    path("tasks/<taskName>", views.tasks, name="task"),
]