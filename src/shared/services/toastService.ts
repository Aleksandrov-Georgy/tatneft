import { toast, type ToastPosition, type TypeOptions } from 'react-toastify';

export interface ToastService {
  message: string;
  position?: ToastPosition;
  toastType?: TypeOptions;
}

export const toastService = ({
  message,
  position = 'top-right',
  toastType = 'success',
}: ToastService) => {
  toast(message, {
    type: toastType,
    position: position,
    autoClose: 3000,
    pauseOnHover: true,
  });
};
