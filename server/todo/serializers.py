from rest_framework import serializers
from .models import TodoModel



class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=TodoModel
        fields=('id','todoid','todo')

    def create(self, validated_data):
        todo=TodoModel.objects.create_todo(validated_data['todoid'],validated_data['todo'])
        return todo