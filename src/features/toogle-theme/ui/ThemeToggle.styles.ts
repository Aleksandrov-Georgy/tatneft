import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background}10;
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export { ToggleWrapper };
