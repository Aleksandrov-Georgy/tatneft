import type { ChartFormValues } from '@/features/data-entry';

type ParsedCSVRow = {
  parameter1: number;
  parameter2: number;
  parameter3: number;
};
interface ParseCSVResult {
  data: ParsedCSVRow[];
  errors: string[];
}

export const parseCSV = (content: string): ParseCSVResult => {
  const errors: string[] = [];
  const lines = content.trim().split('\n');

  const [header, ...rows] = lines;

  const expectedHeaders = ['parameter1', 'parameter2', 'parameter3'];
  const actualHeaders = header.split(',').map((h) => h.trim());

  if (!expectedHeaders.every((h) => actualHeaders.includes(h))) {
    return { data: [], errors: ['Неверный формат заголовков'] };
  }

  const data: ChartFormValues[] = rows
    .map((row, i) => {
      const values = row.split(',').map((v) => v.trim());

      if (values.length !== 3) {
        errors.push(`Строка ${i + 2}: неверное количество колонок`);
        return null;
      }

      const [p1, p2, p3] = values.map(Number);

      if ([p1, p2, p3].some(isNaN)) {
        errors.push(`Строка ${i + 2}: значения должны быть числами`);
        return null;
      }

      if ([p1, p2, p3].some((v) => v < 0 || v > 100)) {
        errors.push(`Строка ${i + 2}: значения должны быть от 0 до 100`);
        return null;
      }

      return { parameter1: p1, parameter2: p2, parameter3: p3 };
    })
    .filter((entry): entry is ChartFormValues => entry !== null);

  return { data, errors };
};
