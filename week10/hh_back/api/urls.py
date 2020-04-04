from django.urls import path

from api.views import companies_list, companies_list_id, vac_by_comp, vacancies_list, vacancies_list_id, vacancies_list_top_ten

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', companies_list_id),
    path('companies/<int:id>/vacancies/', vac_by_comp),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancies_list_id),
    path('vacancies/top_ten/', vacancies_list_top_ten)
]