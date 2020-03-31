import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService} from '../film.service'
import {Film} from '../film'
import { Location } from '@angular/common';
import { CATEGORIES } from '../categories';
import { Category } from '../category';




@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  categories: Category[];
  CATEGORIES = CATEGORIES

  films: Film[];
  constructor(
    private location: Location,
    private filmService: FilmService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFilms();

  }
  getFilms(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilmofC(id)
      .subscribe(films => this.films = films);
  }


  }
  


