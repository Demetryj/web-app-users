import styled from 'styled-components';

export const Container = styled.div`
  min-width: ${p => p.theme.spacing(80)}; // 320
  padding: 0 ${p => p.theme.spacing(3.75)};

  margin-left: auto;
  margin-right: auto;

  max-width: ${p => p.theme.spacing(120)}; // 480

  @media screen and (${p => p.theme.media.medium}) {
    max-width: ${p => p.theme.spacing(192)}; // 768
  }

  @media screen and (${p => p.theme.media.large}) {
    max-width: ${p => p.theme.spacing(285)}; // 1140
  }
`;
