from django.urls import path
from .tasksAPI import getLists, setListById, setTaskById, getTasksByList, getImportantTasks
from .authAPI import signup, sigin, signout, getUser
from . import views

urlpatterns = [
    path("lists/", getLists.as_view()),
    path("list/<int:listID>", setListById.as_view()),
    path("tasks/<int:listID>", getTasksByList.as_view()),
    path("task/<int:taskID>", setTaskById.as_view()),
    path("tasks/important/", getImportantTasks.as_view()),
    path("login/", sigin.as_view(), name="login"),
    path("logout/", signout.as_view(), name="logout"),
    path("register/", signup.as_view(), name="register"),
    path("user/", getUser.as_view(), name="register")
]
