import { BaseButton, type ButtonProps } from './Button.styles.ts';
import type { ReactNode } from 'react';

export interface Button {
  type?: HTMLButtonElement['type'];
  disabled?: HTMLButtonElement['disabled'];
  onClick?: () => void;
  size: ButtonProps['size'];
  children: ReactNode;
}
export const Button = ({ type = 'button', disabled, onClick, size, children }: Button) => (
  <BaseButton size={size} type={type} onClick={onClick} disabled={disabled}>
    {children}
  </BaseButton>
);
