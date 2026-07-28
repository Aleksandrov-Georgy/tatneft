import { toast } from 'react-toastify';
import { useChartStore } from '@/features/chart';

export interface ErrorService {
  handleError: (message: string) => void;
  clearError: () => void;
}

export const errorService: ErrorService = {
  handleError: (message) => {
    useChartStore.getState().setError(message);
  },
  clearError: () => {
    useChartStore.getState().clearError();
  },
};

useChartStore.subscribe((state, prev) => {
  if (state.error && state.error !== prev.error) {
    toast.error(state.error, {
      position: 'top-right',
      autoClose: 3000,
      pauseOnHover: true,
    });
  }
});
