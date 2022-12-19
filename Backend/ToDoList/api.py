from .models import Lista, Task
from .serializers import ListaSerializer, TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class getLists(APIView):
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

class setListById(APIView):
  def get_object(self, listID):
    try:
      return Lista.objects.get(id = listID)
    except:
      return None

  def get(self, request, listID, *args, **kwargs):
    queryset = self.get_object(listID)
    
    if not queryset:
      return Response({"res": "List not finded"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = ListaSerializer(queryset)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def put(self, request, listID, *args, **kwargs):
    instance = self.get_object(listID)

    if not instance:
      return Response({"res": "List not finded"}, status=status.HTTP_400_BAD_REQUEST)
    
    data = {
      "name" : request.data.get("name")
    }

    serializer = ListaSerializer(instance = instance, data = data, partial = True)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, listID, *args, **kwargs):
    instance = self.get_object(listID)

    if not instance:
      return Response({"res":"List not finded"}, status=status.HTTP_400_BAD_REQUEST)

    instance.delete()
    return Response({"res":"List deleted"}, status=status.HTTP_200_OK)










class getTasksByList(APIView):
  def get(self, request, listID, *args, **kwargs):
    queryset = Task.objects.filter(List = listID)
    serializer = TaskSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

class setTaskById(APIView):
  def get(self, request, taskID, *args, **kwargs):
    queryset = Task.objects.filter(id = taskID)
    serializer = ListaSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  


