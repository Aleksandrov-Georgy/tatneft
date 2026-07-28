export const validationRules = {
  parameter1: {
    required: 'Обязательное поле',
    min: { value: 0, message: 'Минимальное значение 0' },
    max: { value: 100, message: 'Максимальное значение 100' },
  },
  parameter2: {
    required: 'Обязательное поле',
    min: { value: 0, message: 'Минимальное значение 0' },
    max: { value: 100, message: 'Максимальное значение 100' },
  },
  parameter3: {
    required: 'Обязательное поле',
    min: { value: 0, message: 'Минимальное значение 0' },
    max: { value: 100, message: 'Максимальное значение 100' },
  },
} as const;
