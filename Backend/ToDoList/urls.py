from django.urls import path
from . import views

urlpatterns = [
    path('', views.homePage, name="home"),
    path("lists/", views.lists, name="lists"),
    path("tasks/", views.tasks, name="tasks"),
    path("list/<listName>", views.lists, name="list"),
    path("tasks/<taskName>", views.tasks, name="task")
]