import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(film) {
    this.items.push(film);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
   this.items=[]
   return this.items;


  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
