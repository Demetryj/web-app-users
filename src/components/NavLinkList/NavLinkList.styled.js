import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: ${p => (p.mobile ? 'none' : 'center')};
  flex-direction: ${p => (p.mobile ? 'column' : 'none')};
  gap: ${p => p.theme.spacing(12.5)};

  @media screen and (${p => p.theme.media.medium}) {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => (p.mobile ? p.theme.fontSizes.xl : p.theme.fontSizes.xm)};
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryFontColor};

  transition: ${p => p.theme.transitions.main};

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentColor};
  }

  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
`;
