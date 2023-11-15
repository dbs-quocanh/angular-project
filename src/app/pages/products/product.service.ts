import {Injectable} from '@angular/core';
import {Product, products, categories} from 'src/app/pages/products/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  products: Product[] = [];
  productCards: Product[] = [];
  categoryTitle = '';
  categoriesType = categories;
  openDialogConfirm = false;
  ngOnInit(): void {
    this.getProducts(categories.phone);
  }
  toUpperCaseFirstChar = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  getProducts = (category: string): Product[] => {
    switch (category) {
      case categories.phone:
        this.products = products.filter((product) => product.category === categories.phone);
        this.categoryTitle = this.toUpperCaseFirstChar(categories.phone);
        return this.products;
      case categories.laptop:
        this.products = products.filter((product) => product.category === categories.laptop);
        this.categoryTitle = this.toUpperCaseFirstChar(categories.laptop);
        return this.products;
      case categories.clothes:
        this.products = products.filter((product) => product.category === categories.clothes);
        this.categoryTitle = this.toUpperCaseFirstChar(categories.clothes);
        return this.products;
      case categories.reports:
        this.products = products.filter((product) => product.category === categories.reports);
        this.categoryTitle = this.toUpperCaseFirstChar(categories.reports);
        return this.products;
      default:
        return products;
    }
  };

  toggleDialogConfirm = () => {
    this.openDialogConfirm = !this.openDialogConfirm;
  };
}
