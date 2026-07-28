import styled from 'styled-components';

export const CharWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;

  & > div {
    // библиотека проставляет ширину инлайново, по этому оставляю !important
    width: 90% !important;
  }
`;
