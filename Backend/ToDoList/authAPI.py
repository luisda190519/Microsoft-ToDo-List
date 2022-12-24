from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from .serializers import userSerializer

class signup(APIView):
    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.create_user(username = request.data.get('username'), password = request.data.get('password'))
            user.save()
            login(request, user)
            serializer = userSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({"res":"error"}, status=status.HTTP_400_BAD_REQUEST)


class sigin(APIView):
    def post(self, request, *args, **kwargs):
        user = authenticate(request, username = request.data.get("username"), password = request.data.get("password"))
        if user is None:
            return Response({"res":"username or password incorrect"}, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        serializer = userSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

#Cierra sesion, el request.user es una cookie como tal
class signout(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({"res" : "logout correctly"}, status=status.HTTP_200_OK)

#get the user logged
class getUser(APIView):
    def get(self, request, userID, *args, **kwargs):
        user = User.objects.filter(id = userID)
        serializer = userSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)




