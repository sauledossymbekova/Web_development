import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FILMS } from './films';
import { Film } from './film';
import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  categories: Category[];

  constructor() { }

  getFilms(): Observable<Film[]> {
    return of(FILMS);
  }
  getFilm(id): Observable<Film> {
    return of(FILMS.find(film => film.id === id));
  }
  getCategory(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  getCategories(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }
  getFilmofC(categoryId: number): Observable<Film[]> {
    return of(FILMS.filter(film => film.categoryId === categoryId));
  }


}

