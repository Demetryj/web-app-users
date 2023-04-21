import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${p => p.theme.spacing(12)} ${p => p.theme.spacing(10)};

  width: 100vw;
  height: 100vh;

  background-color: ${p => p.theme.colors.bgColorBurgerMenu};

  z-index: 5;

  @media screen and (${p => p.theme.media.medium}) {
    display: none;
  }
`;
