from django.urls import path
from .tasksAPI import getLists, setListById, setTaskById, getTasksByList, getImportantTasks
from .authAPI import signup, sigin, signout
from . import views

urlpatterns = [
    path("lists/", getLists.as_view()),
    path("list/<int:listID>", setListById.as_view()),
    path("tasks/<int:listID>", getTasksByList.as_view()),
    path("task/<int:taskID>", setTaskById.as_view()),
    path("tasks/important/", getImportantTasks.as_view()),
    path("login/", sigin.as_view()),
    path("logout/", signout.as_view()),
    path("register/", signup.as_view())
]
