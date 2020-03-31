import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products'
import {CartService} from '../cart.service'
//Arrange to use product data from an external file.

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
  //Define the product property
  //inject the ActivatedRoute into the constructor by adding it as an argument within the constructor's parentheses.
    private cartService: CartService
  ) { }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')]
    })
  }
  //subscribe to route parameters and fetch the product based on the productId.
}
/*The ActivatedRoute is specific to each routed component that the Angular Router loads. 
It contains information about the route, its parameters, and additional data associated with the route.
By injecting the ActivatedRoute, you are configuring the component to use a service.
While this part of the Getting Started tutorial uses this syntax briefly, 
the Managing Data page covers services in more detail.*/
