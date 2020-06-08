import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Array<ProductModel> = [];
  subscription: Subscription;
  isServiceWorking: boolean = false; 
  constructor(private service: ProductService) { }
  
  ngOnInit() {
    this.isServiceWorking = true;
    this.subscription = this.service.getProducts().subscribe(
      data => {
        this.products = data;
        this.isServiceWorking = false;
      }
    ); 
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
