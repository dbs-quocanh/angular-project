import {Component, OnInit} from '@angular/core';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product';
import {ToastService} from 'src/app/components/toast/toast.service';
import {toast} from 'src/app/components/toast/toast';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(
    private productService: ProductService,
    private toastService: ToastService,
  ) {}
  ngOnInit(): void {
    this.contentDialogCheckoutConfirm = `Do you payment ${this.subtotal} for checkout`;
  }

  handleSubtotal = (fee: number, feeShip: number, isVoucher: boolean) => {
    if (isVoucher) return fee;
    return fee + feeShip;
  };
  get products(): Product[] {
    return [...this.productService.productCards];
  }
  get fee(): number {
    return this.productService.productCards.reduce((totalPrice, product) => totalPrice + product.price, 0);
  }
  feeShip = 20;
  isVoucher = true;
  get subtotal(): number {
    return this.handleSubtotal(this.fee, this.feeShip, this.isVoucher);
  }
  titleDialogConfirm = '';
  contentDialogConfirm = 'Do you remove this product from cards?';
  titleDialogCheckoutConfirm = 'Checkout';
  contentDialogCheckoutConfirm = '';
  open = false;
  openDialogCheckout = false;
  productRemove: Product | undefined;

  toggleDialogConfirm = () => (this.open = !this.open);
  toggleDialogCheckoutConfirm = () => (this.openDialogCheckout = !this.openDialogCheckout);

  removeProduct = (product: Product | undefined) => {
    if (product) {
      const products = this.productService.productCards.filter((productCard) => productCard.id !== product.id);
      this.productService.productCards = [...products];
      toast({type: 1, message: 'Removed product successfully.'}, this.toastService);
    }
  };

  selectProductRemove = (product: Product) => {
    this.toggleDialogConfirm();
    this.productRemove = product;
    this.titleDialogConfirm = product.name;
  };

  onCheckout = () => {
    if (this.products.length !== 0) {
      this.toggleDialogCheckoutConfirm();
      return;
    }
    toast({type: 3, message: 'Your shopping cart is empty'}, this.toastService);
  };

  handleCheckout = () => {
    toast({type: 1, message: 'Checkout successfully'}, this.toastService);
    this.productService.productCards = [];
  };
}
