import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {VacancyListComponent} from './components/vacancy-list/vacancy-list.component';
import {VacancyDetailComponent} from './components/vacancy-detail/vacancy-detail.component';
import {CompanyDetailComponent} from './components/company-detail/company-detail.component';


const routes: Routes = [
  {path: '', component: CompanyListComponent},
  {path: 'company/:id', component: CompanyDetailComponent},
  {path: 'company/:id/vacancies', component: VacancyListComponent},
  {path: 'company/:id/vacancies/:id', component: VacancyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
