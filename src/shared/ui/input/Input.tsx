import { forwardRef } from 'react';
import { InputWrapper, Label, StyledInput, ErrorText } from './Input.styles';

interface InputProps {
  label: string;
  type?: HTMLInputElement['type'];
  placeholder?: HTMLInputElement['placeholder'];
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder = '', type, error, ...rest }, ref) => (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput ref={ref} type={type} placeholder={placeholder} {...rest} />
      <ErrorText className={error ? 'visible' : ''}>{error}</ErrorText>
    </InputWrapper>
  )
);
