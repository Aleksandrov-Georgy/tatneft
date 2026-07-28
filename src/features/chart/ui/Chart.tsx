import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { selectChartData, selectClearData, selectRemoveEntry, useChartStore } from '../model/store';
import { CharWrapper, LineWrapper } from './Char.styles';
import { useThemeStore } from '@/app/store';
import { Button } from '@/shared/ui/button';
import { toastService } from '@/shared/services';

export const Chart = () => {
  const data = useChartStore(selectChartData);
  const clearData = useChartStore(selectClearData);
  const removeEntry = useChartStore(selectRemoveEntry);
  const { isDark } = useThemeStore();

  const series: ApexOptions['series'] = data.map((entry, i) => ({
    name: `Запись ${i + 1}`,
    data: [entry.parameter1, entry.parameter2, entry.parameter3],
  }));

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      background: 'transparent',
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: ['Параметр 1', 'Параметр 2', 'Параметр 3'],
    },
    theme: {
      mode: isDark ? 'dark' : 'light',
    },
    stroke: {
      curve: 'smooth',
    },
  };

  if (!data.length) return null;

  const clearDataChart = () => {
    clearData();
    toastService({ message: 'Данные удалены' });
  };

  return (
    <CharWrapper>
      <ReactApexChart type="line" series={series} options={options} height={350} width="100%" />
      <LineWrapper>
        {data.map((entry, i) => (
          <Button
            key={entry.id}
            size="lg"
            onClick={() => removeEntry(entry.id)}
          >{`Удалить запись ${i + 1}`}</Button>
        ))}
      </LineWrapper>
      <Button size="lg" onClick={clearDataChart}>
        Очистить всё
      </Button>
    </CharWrapper>
  );
};
