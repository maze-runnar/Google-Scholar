
from django.contrib import admin
from django.urls import path, include
from .router import router
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('metrics/', include('metrics.urls')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('', schema_view),
	  path('accounts/', include('rest_framework.urls'))
]
