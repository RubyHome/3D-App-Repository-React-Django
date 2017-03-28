from django.contrib import admin
from models import User, Object, Category, ObjectCategory
# Register your models here.


admin.site.register(User)
admin.site.register(Object)
admin.site.register(Category)
admin.site.register(ObjectCategory)