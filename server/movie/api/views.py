from django.shortcuts import render
from rest_framework import viewsets
from .models import UpcomingMovie,RunningMovie
from .serializers import UpcomingMovieSerializer,RunningMovieSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import ContactMessage
from .serializers import ContactMessageSerializer

# ----------------------------------------------------------


class RunningMovieViewSet(viewsets.ModelViewSet):
    queryset = RunningMovie.objects.all()
    serializer_class = RunningMovieSerializer


class UpcomingMovieViewSet(viewsets.ModelViewSet):
    queryset = UpcomingMovie.objects.all()
    serializer_class = UpcomingMovieSerializer



# ..................contact..................

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    @action(detail=False, methods=['post'])
    def create_contact(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'message sent'}, status=201)
        return Response(serializer.errors, status=400)
    


# .....................send email....................

from rest_framework import viewsets
from .models import Ticket
from .serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

