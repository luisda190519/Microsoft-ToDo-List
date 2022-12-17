from django.urls import path
from .api import ListaApiView, TaskApiView, ListaIdApiView, TaskIdApiView
from . import views

urlpatterns = [
    path('', views.homePage, name="home"),
    path("lists/", ListaApiView.as_view()),
    path("tasks/", TaskApiView.as_view()),
    path("lists/<int:listID>", ListaIdApiView.as_view()),
    path("tasks/<int:taskID>", TaskIdApiView.as_view()),
]