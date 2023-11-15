import {Component} from '@angular/core';
import {phones} from 'src/data';
import {ProductService} from './product.service';
import {Product, categories} from './product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private productService: ProductService) {}
  products: Product[] = [...this.productService.products];
}
