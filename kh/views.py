from django.shortcuts import render

__author__ = 'khlg'

def home(request):
    args = {}
    return render(request, 'test.html', args)
