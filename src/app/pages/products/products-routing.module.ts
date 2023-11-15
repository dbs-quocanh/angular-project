import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products',component: ProductsComponent},
  { path: 'products/phone', component: PhoneComponent },
  { path: 'products/laptop', component: LaptopComponent },
  { path: 'products/clothes', component: ClothesComponent },
  { path: 'products/reports', component: ReportsComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: '', redirectTo: 'products/phone', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
