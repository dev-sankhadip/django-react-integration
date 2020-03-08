from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','username','email')


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields=('id','username','email','password')
        
    def create(self, validated_data):
        print(validated_data)
        user=User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user