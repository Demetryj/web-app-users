import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${p => p.theme.spacing(12)} ${p => p.theme.spacing(10)};

  background-color: ${p => p.theme.colors.bgColorBurgerMenu};

  width: 100vw;
  height: 100vh;

  z-index: 5;

  @media screen and (${p => p.theme.media.medium}) {
    display: none;
  }
`;
