import { create } from 'zustand';
import type { ChartFormValues } from '@/features/data-entry';

export interface ChartEntry extends ChartFormValues {
  id: string;
}

interface ChartState {
  data: ChartEntry[];
  error: string | null;
  addEntry: (data: ChartFormValues) => void;
  removeEntry: (index: string) => void;
  clearData: () => void;
  setError: (message: string) => void;
  clearError: () => void;
}

export const useChartStore = create<ChartState>((set) => ({
  data: [],
  error: null,
  addEntry: (entry) =>
    set((state) => ({
      data: [...state.data, { ...entry, id: crypto.randomUUID() }],
    })),
  removeEntry: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
  clearData: () => set({ data: [] }),
  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
}));

export const selectChartData = (state: ChartState) => state.data;
export const selectChartError = (state: ChartState) => state.error;
export const selectClearData = (state: ChartState) => state.clearData;
export const selectRemoveEntry = (state: ChartState) => state.removeEntry;
