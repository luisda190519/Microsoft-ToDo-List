from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class signup(APIView):
    def get(self, request, *args, **kwargs):
        print("hola")

    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.create_user(request.data.get('username'), request.data.get('password'))
            user.save()
            login(request, user)
            return Response(user, status=status.HTTP_200_OK)
        except:
            print("error")
