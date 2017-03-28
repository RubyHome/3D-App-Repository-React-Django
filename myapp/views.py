from django.shortcuts import render,HttpResponse, redirect
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from models import User, Object, Category
from django.conf import settings
from rest_framework import viewsets
from serializers import UserSerializer, ObjectSerializer , CategorySerializer
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer



def index(request):
	return render(request, 'myapp/testview.html', {})	


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	def create(self, request, *args, **kwargs):
		data = request.data
		test = User.objects.filter(username=data["username"], password=data["password"])
		stat = False
		if len(test) > 0 :
			stat = True
		# serializer = self.get_serializer(data=data)
		# print("seralizer-------------",serializer)
		# serializer.is_valid(raise_exception=True)
		# self.perform_create(serializer)
		# headers = self.get_success_headers(serializer.data)
		return Response(stat)

class UserApiView(APIView):

    def get(self, request, format=None):
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)
	def post(self, request, format=None):
		data = request.data
		users = User.objects.filter(username=data["username"], password=data["password"])
		stat = False
		if len(users) > 0 :
			stat = True
		return Response(stat)

class ObjectViewSet(viewsets.ModelViewSet):
	queryset = Object.objects.all()
	serializer_class = ObjectSerializer
	def list(self, request):
		products = Object.objects.all()
		serializer = ObjectSerializer(products, many=True)
		data = JSONRenderer().render(serializer.data)
		return Response(data)

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	def list(self, request):
		categorys = Category.objects.all()
		serializer = CategorySerializer(categorys, many=True)
		data = JSONRenderer().render(serializer.data)
		return Response(data)

	# def create(self, request):
	# 	pass

	# def retrieve(self, request, pk=None):
	# 	pass

	# def update(self, request, pk=None):
	# 	pass

	# def partial_update(self, request, pk=None):
	# 	pass

	# def destroy(self, request, pk=None):
	# 	pass

# @api_view(['GET','POST'])
# def user_list(request , format=None):
# 	if request.method == 'GET':
# 		users = User.objects.all()
# 		serializer = UserSerializer(users, many=True)
# 		return Response(serializer.data)
# 	elif request.method	== 'POST':
# 		serializer = UserSerializer(data = request.data)	
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data , status = status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)	

# @api_view(['GET', 'PUT', 'DELETE'])		
# def user_detail(request, pk, format=None):
# 	try:
# 		user = User.objects.get(pk=pk)
# 	except User.DoesNotExist:
# 		return Response(status = status.HTTP_404_NOT_FOUND)

# 	if request.method == 'GET':
# 		serializer = UserSerializer(user)
# 		return Response(serializer.data)
	
# 	if request.method == 'PUT':
# 		serializer = UserSerializer(user, data=request.data)		
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data)	
# 		return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)			
	
# 	elif request.method == 'DELETE':
# 		user.delete()
# 		return	Response(status = status.HTTP_204_NO_CONTENT)		

	
