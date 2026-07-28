import { EntryWrapper } from './DataEntry.styles';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useForm } from 'react-hook-form';
import { validationRules } from '../model/validation';
import { useChartStore } from '@/features/chart/model/store.ts';
import { ImportCSV } from '@/features/import-csv';
import { DownloadSvg } from '@/shared/assets';

export interface ChartFormValues {
  parameter1: number;
  parameter2: number;
  parameter3: number;
}
export const DataEntry = () => {
  const { addEntry } = useChartStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChartFormValues>();

  const onSubmit = (data: ChartFormValues) => {
    addEntry(data);
    reset();
  };

  return (
    <>
      <EntryWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Параметр 1"
          type="number"
          {...register('parameter1', validationRules.parameter1)}
          error={errors.parameter1?.message}
        />
        <Input
          label="Параметр 2"
          type="number"
          {...register('parameter2', validationRules.parameter2)}
          error={errors.parameter2?.message}
        />
        <Input
          label="Параметр 3"
          type="number"
          {...register('parameter3', validationRules.parameter3)}
          error={errors.parameter3?.message}
        />
        <Button type="submit" size="lg">
          Добавить данные
        </Button>
        <ImportCSV />
        <a href="/templates/parameters-csv.csv" download>
          <Button size="lg" type="button">
            <DownloadSvg />
            Скачать шаблон
          </Button>
        </a>
      </EntryWrapper>
    </>
  );
};
