import styled from 'styled-components';

export interface ButtonProps {
  size: 'xs' | 'md' | 'lg' | 'full';
}

export const BaseButton = styled.button<ButtonProps>`
  width: ${({ size }) =>
    size === 'full' ? '100%' : size === 'lg' ? '10rem' : size === 'md' ? '6rem' : '4rem'};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  background: darkslateblue;
  color: #fff;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
