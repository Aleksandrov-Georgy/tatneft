import styled from 'styled-components';

export const HomePageWrapper = styled.section`
  display: grid;
  grid-template-columns: 25rem 1fr;
  min-height: 100vh;

  & > *:first-child {
    border-right: 1px solid ${({ theme }) => theme.text}30;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;

    & > *:first-child {
      border-right: none;
      border-bottom: 1px solid ${({ theme }) => theme.text}30;
    }
  }
`;
