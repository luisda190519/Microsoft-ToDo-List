from rest_framework import serializers
from .models import Lista, Task

class ListaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lista
    fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = "__all__"