from rest_framework import serializers
from Customer.models import Customers

class CustomerSerializer(serializers.ModelSerializer):
      class Meta:
          model=Customers
          fields=('CustomerId',
                  'CustomerName',
                  'Telephone')