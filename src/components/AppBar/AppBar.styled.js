import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(4)} 0;

  @media screen and (${p => p.theme.media.medium}) {
    justify-content: flex-start;
    gap: ${p => p.theme.spacing(22)};
  }

  @media screen and (${p => p.theme.media.large}) {
    gap: ${p => p.theme.spacing(25)};
    padding: ${p => p.theme.spacing(6)} 0;
  }
`;

export const Logo = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.accentColor};

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.19;
  }
`;

export const ButtonMenu = styled.button`
  display: ${p => (p.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 25;

  svg {
    color: ${p => p.theme.colors.darkColor};
    transition: ${p => p.theme.transitions.main};
  }
  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.accentColor};
    }
  }
`;

export const OpenMenuIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
`;

export const CloseMenuIcon = styled(MdClose)`
  width: 30px;
  height: 30px;
`;

export const Border = styled.span`
  position: absolute;
  top: ${p => p.theme.spacing(15.5)};
  left: 0;

  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors.borderColorHeader};

  @media screen and (${p => p.theme.media.large}) {
    top: ${p => p.theme.spacing(20)};
  }
`;
