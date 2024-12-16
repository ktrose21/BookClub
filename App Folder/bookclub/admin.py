from django.contrib import admin
from .models import Book, BookClub, Discussion

admin.site.register(Book)
admin.site.register(BookClub)
admin.site.register(Discussion)
