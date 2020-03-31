import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmdetailsComponent } from './filmdetails/filmdetails.component';
import {CategoriesComponent} from './categories/categories.component'
import {CartComponent} from './cart/cart.component'
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path: 'categories', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories', component:CategoriesComponent},
  {path: 'categories/:id', component: FilmsComponent },
  {path: 'films/:id', component: FilmdetailsComponent},
  {path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
