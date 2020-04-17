from rest_framework import generics, permissions, status
from rest_framework.response import Response

from .serializers import TodoSerializer


class TodoView(generics.CreateAPIView):
    serializer_class=TodoSerializer

    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            todo=serializer.save()
            return Response({
                "todo":todo
            })