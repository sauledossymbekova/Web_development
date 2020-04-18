import { Component, OnInit } from '@angular/core';
import {VacancyService} from '../../services/vacancy.service';
import {Vacancy} from '../../interfaces/Vacancy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {

  vacancy: Vacancy;


  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancy();
  }

  getVacancy() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
  }

}
