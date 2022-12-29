from django.urls import path
from .tasksAPI import getLists, setListById, setTaskById, getTasksByList, getImportantTasks
from .authAPI import signup, sigin, signout, getUser
from . import views

urlpatterns = [
    path("lists/<int:userID>", getLists.as_view()),
    path("list/<int:listID>/<int:userID>", setListById.as_view()),
    path("tasks/<int:listID>/<int:userID>", getTasksByList.as_view()),
    path("task/<int:taskID>/<int:userID>", setTaskById.as_view()),
    path("tasks/important/<int:userID>", getImportantTasks.as_view()),
    path("login/", sigin.as_view(), name="login"),
    path("logout/", signout.as_view(), name="logout"),
    path("register/", signup.as_view(), name="register"),
    path("user/<int:userID>", getUser.as_view(), name="getUser")
]
