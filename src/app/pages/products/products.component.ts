import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products: ProductModel[];
  showLoading = false;

  constructor(private service: ProductService) { }
  
  ngOnInit() {
    this.showLoading = true;
    this.subscription = this.service.getProducts().subscribe(
      data => {
        this.showLoading = false;
        this.products = data;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
