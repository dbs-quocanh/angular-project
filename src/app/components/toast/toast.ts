import {ToastService} from './toast.service';

export interface Toast {
  type: number;
  message: string;
}

export const toast = (toast: Toast, toastService: ToastService) => {
  toastService.handleToast(toast);
};
