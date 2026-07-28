import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { selectChartData, useChartStore } from '../model/store';
import { CharWrapper } from './Char.styles.ts';
import { useThemeStore } from '@/app/store';

export const Chart = () => {
  const data = useChartStore(selectChartData);
  const { isDark } = useThemeStore();
  const series: ApexOptions['series'] = [
    {
      name: 'Параметры',
      data: data ? [data.parameter1, data.parameter2, data.parameter3] : [],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
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

  if (!data) return;

  return (
    <CharWrapper>
      <ReactApexChart type="line" series={series} options={options} height={350} width="100%" />
    </CharWrapper>
  );
};
