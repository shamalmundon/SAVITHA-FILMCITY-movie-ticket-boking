from rest_framework import serializers
from .models import UpcomingMovie,RunningMovie
from django.contrib.auth.models import User
from .models import ContactMessage
from .models import Ticket

class RunningMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = RunningMovie
        fields = '__all__'

class UpcomingMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingMovie
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'   
