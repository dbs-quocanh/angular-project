import {Component} from '@angular/core';
import {clothes} from 'src/data';
import {ProductService} from 'src/app/pages/products/product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css'],
})
export class ClothesComponent {
  constructor(private productService: ProductService) {}
  products = [...this.productService.products];
}
