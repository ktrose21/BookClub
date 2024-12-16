from rest_framework import serializers
from .models import Book, BookClub, Discussion

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class BookClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookClub
        fields = '__all__'

class DiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = '__all__'
