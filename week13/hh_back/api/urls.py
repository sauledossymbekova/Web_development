from django.urls import path
# from api.views import company_list,company_id,company_vacancy,vacancy_list,vacancy_id,vacancy_top
from api.views.views_cbv_generics import CompanyListAPIView,CompanyDetailAPIView

from api.views.views_cbv_generics import CompanyListAPIView,VacancyDetailAPIView,CompanyDetailAPIView,VacancyListAPIView,CompanyVacanciesAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies', CompanyVacanciesAPIView.as_view()),

    # path('companies/<int:company_id>/vacancies', CompanyWithVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
]