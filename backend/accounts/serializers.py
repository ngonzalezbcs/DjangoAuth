from djose.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerizlizer.Meta):
        model = User
        fields = ('id','email', 'name', 'password')
        

