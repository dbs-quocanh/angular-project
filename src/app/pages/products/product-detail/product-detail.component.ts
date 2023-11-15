import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/pages/products/product.service';
import {Product} from 'src/app/pages/products/product';
import {ActivatedRoute} from '@angular/router';
import {ToastService} from 'src/app/components/toast/toast.service';
import {toast} from 'src/app/components/toast/toast';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) {}
  product: Product | undefined;
  title = '';
  titleDialogConfirm? = '';
  contentDialogConfirm = 'Do you add this product to cards?';
  open = false;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productService.products.find((product) => product.id === productIdFromRoute);
    this.title = this.productService.categoryTitle;
    this.titleDialogConfirm = this.product?.name;
  }
  toggleDialogConfirm = () => (this.open = !this.open);

  addProduct = (product: Product | undefined, isCheckout: boolean | undefined = false) => {
    if (product && !isCheckout) {
      this.productService.productCards.push(product);
      toast({type: 1, message: 'Added product successfully.'}, this.toastService);
    }
  };
}
