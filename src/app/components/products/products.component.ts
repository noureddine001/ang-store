import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product.model';
import { ProductsService } from 'src/service/ProductsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product [] | null=null  
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products=data 
    })
  }

}
