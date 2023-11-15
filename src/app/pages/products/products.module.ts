import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {PhoneComponent} from './phone/phone.component';
import {LaptopComponent} from './laptop/laptop.component';
import {ClothesComponent} from './clothes/clothes.component';
import {ReportsComponent} from './reports/reports.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductService} from './product.service';
import {ComponentsModule} from 'src/app/components/components.module';
import {ToastService} from 'src/app/components/toast/toast.service';
// import {DialogSmComponent, DialogsSmModule} from 'src/app/components/dialogs';
// import {DialogsSmModule} from 'src/app/components/dialogs/dialog-sm/dialogs-sm.module';

@NgModule({
  declarations: [PhoneComponent, LaptopComponent, ClothesComponent, ReportsComponent, ProductDetailComponent],
  imports: [CommonModule, ProductsRoutingModule, ComponentsModule],
  providers: [ProductService, ToastService],
  exports: [PhoneComponent, LaptopComponent, ClothesComponent, ReportsComponent, ProductDetailComponent],
})
export class ProductsModule {}
