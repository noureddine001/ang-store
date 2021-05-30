import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"products" , component:ProductsComponent},
  {path:"", component:HomeComponent},
  {path:"users", component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
