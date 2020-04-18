from rest_framework import serializers
from api.models import Vacancy,Company

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(default='')
    city = serializers.CharField(max_length=100, default='')
    address = serializers.CharField(default='')

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data.get('name'),description=validated_data.get('description'),
                                         city=validated_data.get('city'),address=validated_data.get('address'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(default='')
    salary = serializers.FloatField(default=1500.0)
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Vacancy
        fields = '__all__'

class CompanyWithVacanciesSerializer(serializers.ModelSerializer):
    vacancies = VacancySerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'vacancies')