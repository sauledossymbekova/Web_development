import { Component, OnInit } from '@angular/core';
import { FilmService} from '../film.service'
import {Category} from '../category'
import {FILMS} from '../films'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  film = FILMS
  constructor(private filmService: FilmService) { }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.filmService.getCategory()
      .subscribe(categories => this.categories = categories);
  }

}
