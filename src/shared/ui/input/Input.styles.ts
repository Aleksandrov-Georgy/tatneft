import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-rows: 1fr auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.text}30;
  color: ${({ theme }) => theme.text};

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  background: ${({ theme }) => theme.backgroundSecondary}10;
`;

export const Label = styled.label`
  pointer-events: none;
`;

export const ErrorText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: red;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.2s ease,
    opacity 0.2s ease;

  &.visible {
    max-height: 2rem;
    opacity: 1;
  }
`;
