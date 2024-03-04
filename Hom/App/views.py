from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def get_home(request):
    return HttpResponse("this is a heart")
def get_home1(request):
    return HttpResponse("this is a heart 2")