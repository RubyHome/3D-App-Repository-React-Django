from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Object(models.Model):
	
	name = models.CharField(max_length = 30)
	description = models.CharField(max_length = 100)
	owner_id = models.IntegerField()
	approved = models.BooleanField(default=True)
	uploadprocessed = models.BooleanField(default=True)
	sha2 = models.CharField(max_length = 50)
	thumbnail = models.CharField(max_length = 50)
	errors = models.BooleanField(default=True)
	lastmodified = models.DateField()

# class ObjectResources(models.Model):
# 	object_id = models.ForeignKey(Objects)
# 	key = models.CharField(max_length = 50)
# 	bucket = models.CharField(max_length = 50)
# 	region = models.CharField(max_length = 100)
# 	otype = models.CharField(max_length = 20)

# class ObjectErrors(models.Model):
# 	object_id = models.ForeignKey(Objects) 
# 	errorText = models.CharField(max_length = 40)

class Category(models.Model):
	name = models.CharField(max_length = 100)	
	description = models.CharField(max_length = 200)

class ObjectCategory(models.Model):
	object_id = models.OneToOneField(Object, on_delete=models.CASCADE, primary_key=True)
	category_id	= models.ForeignKey(Category)

class User(models.Model):
	role_type = (
			('A', 'Admin'),
			('R', 'Reviewer'),
			('U', 'User'),
		)
	username = models.CharField(max_length = 50)		
	password = models.CharField(max_length = 40)
	role = models.CharField(max_length = 2, choices = role_type)

# class Role(models.Model):
# 	rid = models.IntegerField()
# 	name = models.CharField(max_length = 30 )	