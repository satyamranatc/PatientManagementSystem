
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("api/patient/", include("PatientView.urls")),
    path("admin/", admin.site.urls),
]
