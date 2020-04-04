from django.shortcuts import render
from django.http import JsonResponse

from api.models import Company, Vacancy


# Create your views here.


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json_company() for company in companies]
    return JsonResponse(companies_json, safe=False)


def companies_list_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json_company())


def vac_by_comp(request, id):
    try:
        vacancy = Vacancy.objects.filter(company_id=id)
        vacancies_json = [i.to_json_vacancy() for i in vacancy]
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancies_json, safe= False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json_vacancy() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancies_list_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json_vacancy())


def vacancies_list_top_ten(request):
    vacancies = Vacancy.objects.all().order_by("-salary")
    vacancies_json = [i.to_json_vacancy() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)
