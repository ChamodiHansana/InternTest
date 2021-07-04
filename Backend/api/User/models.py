from django.db import models

# Create your models here.
class User(models.Model):
    UserId=models.AutoField(primary_key=True)
    UserName=models.CharField(max_length=100)
    UserType=models.CharField(max_length=100)
    Password=models.CharField(max_length=10)
    
