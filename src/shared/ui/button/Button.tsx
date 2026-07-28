import { BaseButton, type ButtonProps } from './Button.styles.ts';

export interface Button {
  type: HTMLButtonElement['type'];
  text: HTMLButtonElement['innerText'];
  disabled?: HTMLButtonElement['disabled'];
  onClick?: () => void;
  size: ButtonProps['size'];
}
export const Button = ({ type, text = '', disabled, onClick, size }: Button) => {
  return (
    <BaseButton type={type} onClick={onClick} disabled={disabled} size={size}>
      {text}
    </BaseButton>
  );
};
