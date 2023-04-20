import styled from 'styled-components';

export const SectinBox = styled.section`
  padding: ${p => p.theme.spacing(6)} 0;

  @media screen and (${p => p.theme.media.large}) {
    padding: ${p => p.theme.spacing(8)} 0;
  }
`;
