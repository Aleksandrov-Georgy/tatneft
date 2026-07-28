import { useChartStore } from '@/features/chart';
import { parseCSV } from '../service/parseCSV';
import { toastService } from '@/shared/services';
import { Button } from '@/shared/ui/button';
import { useRef } from 'react';
import type { CharFormValues } from '@/features/data-entry';
import { ImportCSVWrapper } from '@/features/import-csv/ui/ImportCSV.styles.ts';
import { UploadSvg } from '@/shared/assets';

export const ImportCSV = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { setData } = useChartStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target?.result as string;
      const { data, errors } = parseCSV(content);

      errors.forEach((err: string) => toastService({ message: err, toastType: 'error' }));

      data.forEach((entry: CharFormValues) => setData(entry));

      if (data.length) {
        toastService({ message: `Загружено ${data.length} записей`, toastType: 'success' });
      }
    };

    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <ImportCSVWrapper>
      <input ref={fileRef} type="file" accept=".csv" hidden onChange={handleFileChange} />
      <Button size="lg" onClick={() => fileRef.current?.click()}>
        <UploadSvg /> Импорт
      </Button>
    </ImportCSVWrapper>
  );
};

export default ImportCSV;
