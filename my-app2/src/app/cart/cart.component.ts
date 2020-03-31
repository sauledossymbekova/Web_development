import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 clearCart(){
   
    this.cartService.clearCart();
    window.alert('Your products has been deleated from the cart!');
    this.items = this.cartService.getItems();
     }
items;

constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

  
  }
}