from .models import Lista, Task
from .serializers import ListaSerializer, TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ListaApiView(APIView):
  def get(self, request, *args, **kwargs):
    queryset = Lista.objects.all()
    serializer = ListaSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def post(self, request, *args, **kwargs):
    data = {"name":request.data.get('name')}
    serializer = ListaSerializer(data=data)
    
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskApiView(APIView):
  def get(self, request, *args, **kwargs):
    queryset = Task.objects.all()
    serializer = TaskSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def post(self, request, *args, **kwargs):
    data = {
      "name":request.data.get("name"),
      "finished":request.data.get("finished"),
      "important":request.data.get("important"),
      "list":request.data.get("list")
    }

    serializer = TaskSerializer(data = data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)