from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .models import Lista, Task

# Create your views here.
def homePage(request):
  return HttpResponse("Hola")

def lists(request):
  lists = Lista.objects.all()
  return HttpResponse(lists)

def tasks(request):
  tasks = Task.objects.all()
  return HttpResponse(tasks)
