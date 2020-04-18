import { Component, OnInit } from '@angular/core';
import {Company} from '../../interfaces/Company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];

  constructor(public companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies;
      });
  }

  // deleteCompany(id) {
  //   this.companyService.deleteCompany(id).subscribe(res => {
  //       // this.categories = this.categories.filter(c => c.id != id);
  //       // this.getCategoryList();
  //   });
  // }
}
