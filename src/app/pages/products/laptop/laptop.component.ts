import {Component} from '@angular/core';
import {laptops} from 'src/data';
import {ProductService} from 'src/app/pages/products/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent {
  constructor(private productService: ProductService) {}
  products = [...this.productService.products];
}
