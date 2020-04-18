import { Component, OnInit } from '@angular/core';
import {VacancyService} from '../../services/vacancy.service';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../interfaces/Company';
import {Vacancy} from '../../interfaces/Vacancy';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  vacancies: Vacancy[] = [];
  company: Company;

  constructor(private vacancyService: VacancyService, private companyService: CompanyService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCompany();
    this.getVacancies();
  }

  getCompany() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

  getVacancies() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancyListByCompany(id).subscribe(vacancies => this.vacancies = vacancies);
  }

  deleteVacancy(id) {
    this.vacancyService.deleteVacancy(id).subscribe(res => {

    });
  }

}
