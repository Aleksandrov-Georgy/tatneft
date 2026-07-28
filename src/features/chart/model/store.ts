import { create } from 'zustand';
import type { CharFormValues } from '@/features/data-entry';

interface ChartState {
  data: CharFormValues | null;
  error: string | null;
  setData: (data: CharFormValues) => void;
  setError: (message: string) => void;
  clearError: () => void;
}

export const useChartStore = create<ChartState>((set) => ({
  data: null,
  error: null,
  setData: (data) => set({ data }),
  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
}));

export const selectChartData = (state: ChartState) => state.data;
