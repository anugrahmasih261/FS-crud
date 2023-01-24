from http.client import HTTPResponse
from django.shortcuts import render


# Create your views here.

from .serializers import SignupSerializer
from .models import Signup
from rest_framework import generics 

class SignupList(generics.ListAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer



class SignupAdd(generics.CreateAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer



class SignupUpdate(generics.UpdateAPIView, generics.RetrieveAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer


class SignupDelet(generics.DestroyAPIView):
          queryset = Signup.objects.all()
          serializer_class = SignupSerializer


