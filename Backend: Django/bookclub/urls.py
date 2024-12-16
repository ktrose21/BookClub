from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from bookclub.views import BookViewSet, BookClubViewSet, DiscussionViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'book-clubs', BookClubViewSet)
router.register(r'discussions', DiscussionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
