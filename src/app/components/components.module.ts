import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardEmptyComponent} from './cards/card-empty/card-empty.component';
import {DialogSmComponent} from './dialogs';
import {ToastComponent} from './toast/toast.component';

@NgModule({
  declarations: [CardEmptyComponent, DialogSmComponent, ToastComponent],
  imports: [CommonModule],
  exports: [CardEmptyComponent, DialogSmComponent, ToastComponent],
})
export class ComponentsModule {}
