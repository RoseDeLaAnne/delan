from rest_framework.serializers import ModelSerializer

from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ItemsSerializer(ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'
