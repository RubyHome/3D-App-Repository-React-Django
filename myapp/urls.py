from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from myapp import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'objects', views.ObjectViewSet)
router.register(r'categorys', views.CategoryViewSet)

urlpatterns = [
    # url(r'^users/$', views.user_list),
    # url(r'^users/(?P<pk>[0-9]+)$', views.user_detail),
    url(r'^', include(router.urls)),
    url(r'^index/$', views.index, name="index"),
    url(r'^userapiview/$', views.UserApiView.as_view()),
]

# urlpatterns = format_suffix_patterns(urlpatterns)