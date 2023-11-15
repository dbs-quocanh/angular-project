import {Component} from '@angular/core';
import {phones} from 'src/data';
import {ProductService} from 'src/app/pages/products/product.service';

// import {}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent {
  constructor(private productService: ProductService) {}
  products = [...this.productService.products];
}
