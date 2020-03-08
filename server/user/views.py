from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken

from .serializers import RegisterSerializer, UserSerializer


class RegistrationView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "token": AuthToken.objects.create(user)[1]
            })
        except Exception as e:
            print(e);
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)