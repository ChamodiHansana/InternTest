from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from User.models import User
from User.serializers import UserSerializer



# Create your views here.
@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method=='POST':
        users_data=JSONParser().parse(request)
        user_serializer =UserSerializer(data=users_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Register Successfully!!" , safe=False)
        return JsonResponse("Failed to Register.",safe=False)
    


