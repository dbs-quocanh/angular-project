import {ToastService} from 'src/app/components/toast/toast.service';
import {toast} from 'src/app/components/toast/toast';
import {Component, Input, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Product} from 'src/app/pages/products/product';
import {ProductService} from 'src/app/pages/products/product.service';

@Component({
  selector: 'app-dialog-sm',
  templateUrl: './dialog-sm.component.html',
  styleUrls: ['./dialog-sm.component.css'],
})
export class DialogSmComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private toastService: ToastService,
  ) {}

  @Input() title?: string;
  @Input() content?: string;
  @Input() openDialog?: boolean;
  @Input() product?: Product;
  @Input() handleProduct?: (product: Product) => void;

  open = this.openDialog;
  isClick = false;
  @Output() checkoutEvent = new EventEmitter<() => void>();
  @Output() handleConfirmEvent = new EventEmitter<Product>();
  openClass = 'opacity-1 fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300';
  hiddenClass =
    'opacity-0 pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300';
  ngOnInit(): void {
    if (!this.title) this.title = '';
    if (!this.content) this.content = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.isClick) this.toggleDialog();
    this.isClick = true;
  }

  toggleDialog = () => (this.open = !this.open);

  handleConfirm = (product: Product | undefined) => {
    if (product) {
      this.handleConfirmEvent.emit(product);
      this.toggleDialog();
      return;
    }
    toast({type: 1, message: 'Checkout successfully'}, this.toastService);
    this.productService.productCards = [];
    this.toggleDialog();
  };
}
