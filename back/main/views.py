from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import *


@api_view(['GET'])
def getItems(request):
    items = Items.objects.all()

    serializer = ItemsSerializer(items, many=True)

    return Response(serializer.data)


# @api_view(['GET'])
# # @permission_classes([IsAuthenticated])
# def GetStudent(request, username):
#     try:
#         student = Student.objects.get(user=User.objects.get(username=username))

#         serializer = StudentSerializer(student, many=False)

#         return Response(serializer.data)
#     except:
#         return Response(status=404)
