import {ToastService} from 'src/app/components/toast/toast.service';
import {phones, laptops, clothes} from './../data';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {categories} from 'src/app/pages/products/product';
import {ProductService} from 'src/app/pages/products/product.service';
// import {AppService} from './app.service';
import {Toast} from './components/toast/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private toastService: ToastService,
    private productService: ProductService,
  ) {}

  phoneValue = 'phone';
  laptopValue = 'laptop';
  clothesValue = 'clothes';
  reportsValue = 'reports';
  products = [...phones];
  isShowMenu = false;
  title = 'Phone';
  selected = this.phoneValue;
  activeClass = 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium';
  unActiveClass = 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
  get badge(): number {
    return this.productService.productCards.length;
  }

  ngOnInit(): void {
    this.getProducts(categories.phone);
  }

  toggleMenu = (event: MouseEvent) => {
    this.isShowMenu = !this.isShowMenu;
    event.stopPropagation();
  };

  hiddenMenu = () => {
    this.isShowMenu = false;
  };

  preventDefault = (event: MouseEvent) => {
    event.stopPropagation();
  };

  clickCheckoutButton = () => {
    this.title = 'Checkout';
  };

  getProducts = (category: string) => {
    switch (category) {
      case this.phoneValue:
        this.title = 'Phone';
        this.selected = this.phoneValue;
        this.productService.getProducts(category);
        break;
      case this.laptopValue:
        this.title = 'Laptop';
        this.selected = this.laptopValue;
        this.productService.getProducts(category);
        break;
      case this.clothesValue:
        this.title = 'Clothes';
        this.selected = this.clothesValue;
        this.productService.getProducts(category);
        break;
      case this.reportsValue:
        this.title = 'Reports';
        this.selected = this.reportsValue;
        this.productService.getProducts(category);
        break;
      default:
      // code block
    }
  };

  get toasts(): Toast[] {
    return this.toastService.toasts;
  }

  addToast = () => {
    this.toastService.handleToast({type: 1, message: 'add successfully'});
  };
}
