from rest_framework import viewsets
from .models import Book, BookClub, Discussion
from .serializers import BookSerializer, BookClubSerializer, DiscussionSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookClubViewSet(viewsets.ModelViewSet):
    queryset = BookClub.objects.all()
    serializer_class = BookClubSerializer

class DiscussionViewSet(viewsets.ModelViewSet):
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
