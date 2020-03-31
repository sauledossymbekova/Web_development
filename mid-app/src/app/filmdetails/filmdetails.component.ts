import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FilmService} from '../film.service';
import {Film} from '../film';
import {Category} from '../category'
import { CartService } from '../cart.service';
@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {

  categories: Category[];
  film: Film;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private cartService: CartService
    ){ }
    addToCart(film) {
      this.cartService.addToCart(film);
      window.alert('Your film has been added to the WishList!');
    }
  ngOnInit(): void {
    this.getFilm();
 
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id)
      .subscribe(tovar => this.film = tovar);
  }
 

}
