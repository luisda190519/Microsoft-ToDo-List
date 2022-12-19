from django.urls import path
from .api import getLists, setListById, setTaskById, getTasksByList
from . import views

urlpatterns = [
    path("lists/", getLists.as_view()),
    path("list/<int:listID>", setListById.as_view()),
    path("tasks/<int:listID>", getTasksByList.as_view()),
    path("task/<int:taskID>", setTaskById.as_view()),
]
