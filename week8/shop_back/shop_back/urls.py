"""shop_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views as v
urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/products", v.get_products),
    path('api/products/<int:id>', v.get_proudct),
    path("api/categories/", v.get_categories),
    path("api/categories/<int:id>/", v.get_category),
    path("api/categories/<int:id>/products/", v.get_category_products),

]
