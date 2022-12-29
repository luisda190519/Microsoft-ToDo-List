from .models import Lista, Task
from .serializers import ListaSerializer, TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#Get the list of lists and the post request to add a new list
class getLists(APIView):
  def get(self, request, userID, *args, **kwargs):
    queryset = Lista.objects.filter(user=userID)
    serializer = ListaSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def post(self, request, userID, *args, **kwargs):
    data = {"name":request.data.get('name'), "user":userID}
    serializer = ListaSerializer(data=data)
    
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Changes and delete list by its ID
class setListById(APIView):
  def get_object(self, listID, userID):
    try:
      return Lista.objects.get(id = listID, user = userID)
    except:
      return None

  def get(self, request, listID, userID, *args, **kwargs):
    queryset = self.get_object(listID, userID)
    
    if not queryset:
      return Response({"res": "List not finded"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = ListaSerializer(queryset)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def put(self, request, listID, userID, *args, **kwargs):
    instance = self.get_object(listID, userID)

    if not instance:
      return Response({"res": "List not finded"}, status=status.HTTP_400_BAD_REQUEST)
    
    data = {"name" : request.data.get("name"), "active" : request.data.get("active"), "user" : userID}
    serializer = ListaSerializer(instance = instance, data = data, partial = True)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, listID, userID, *args, **kwargs):
    instance = self.get_object(listID, userID)

    if not instance:
      return Response({"res":"List not finded"}, status=status.HTTP_400_BAD_REQUEST)

    instance.delete()
    return Response({"res":"List deleted"}, status=status.HTTP_200_OK)


#Get the list of tasks by their list and add new tasks
class getTasksByList(APIView):
  def get(self, request, listID, userID, *args, **kwargs):
    queryset = Task.objects.filter(List = listID, user = userID)
    serializer = TaskSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def post(self, request, listID, userID, *args, **kwargs):
    data = {
      "name":request.data.get('name'),
      "finished":request.data.get("finished"),
      "important":request.data.get("important"),
      "List":request.data.get("List"),
      "user" : userID
      }

    serializer = TaskSerializer(data=data)
    
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Modify and delete the task alredy created in a specific list
class setTaskById(APIView):
  def get_object(self, taskID, userID):
    try:
      return Task.objects.get(id = taskID, user = userID)
    except:
      return None

  def get(self, request, taskID, userID, *args, **kwargs):
    instance = self.get_object(taskID, userID)
    
    if not instance:
      return Response({"res": "Task not finded"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = TaskSerializer(instance)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def put(self, request, taskID, userID, *args, **kwargs):
    instance = self.get_object(taskID, userID)

    if not instance:
      return Response({"res": "List not finded"}, status=status.HTTP_400_BAD_REQUEST)
    
    data = {
      "name":request.data.get('name'),
      "finished":request.data.get("finished"),
      "important":request.data.get("important"),
      "List":request.data.get("List"),
      "user":userID
      }

    serializer = TaskSerializer(instance = instance, data = data, partial = True)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, taskID, userID, *args, **kwargs):
    instance = self.get_object(taskID, userID)

    if not instance:
      return Response({"res":"List not finded"}, status=status.HTTP_400_BAD_REQUEST)

    instance.delete()
    return Response({"res":"List deleted"}, status=status.HTTP_200_OK)

#Get important tasks
class getImportantTasks(APIView):
  def get(self, request, userID, *args, **kwargs):
    queryset = Task.objects.filter(important = True, user = userID)
    serializer = TaskSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)