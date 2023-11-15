import {Injectable} from '@angular/core';
import {Toast} from './toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}
  toasts: Toast[] = [];
  handleToast = (toast: Toast) => {
    this.toasts.push(toast);
    setTimeout(() => {
      this.toasts.shift();
    }, 2000);
  };
}
