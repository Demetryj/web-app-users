import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* padding: ${p => p.theme.spacing(4)}; */
  /* overflow-y: hidden; */
  /* overflow-y: scroll; */

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  background-color: ${props => props.theme.colors.whiteColor};
  z-index: 1200;
`;
