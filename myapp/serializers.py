from rest_framework import serializers
from models import User, Object, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','role')

class ObjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Object
		fields = ('name', 'description', 'owner_id', 'approved', 'uploadprocessed', 'sha2', 'thumbnail', 'errors', 'lastmodified')

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ('name', 'description')		