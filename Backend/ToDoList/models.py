from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Lista(models.Model):
  name = models.CharField(max_length=100)
  active = models.BooleanField(default=False)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name


class Task(models.Model):
  name = models.CharField(max_length=100)
  finished = models.BooleanField(default=False)
  important = models.BooleanField(default=False)
  List = models.ForeignKey(Lista, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name
  
  