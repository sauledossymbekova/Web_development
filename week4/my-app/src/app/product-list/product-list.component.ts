import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import { Input } from '@angular/core';
import { products } from '../products';

@Component({ 
  selector: 'app-product-list', // name of component
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  share() {
    // window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
}