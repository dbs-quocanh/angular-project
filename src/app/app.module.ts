import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheckoutComponent, ProductsComponent} from 'src/app/pages';
import {ProductsModule} from './pages/products/products.module';
import {CheckoutModule} from './pages/checkout/checkout.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [AppComponent, ProductsComponent, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule, CheckoutModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
