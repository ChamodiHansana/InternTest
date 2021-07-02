from django.conf.urls import url
from Customer import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^customer/$',views.customerApi),
    url(r'^customer/([0-9]+)$',views.customerApi),

    
] 