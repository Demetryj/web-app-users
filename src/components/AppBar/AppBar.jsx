import { useState } from 'react';
import { NavLinkList } from '../NavLinkList';
import { useMedia } from '../../hooks/useMedia';
import { BurgerMenu } from '../BurgerMenu';

import {
  Header,
  Logo,
  ButtonMenu,
  OpenMenuIcon,
  CloseMenuIcon,
  Border,
} from './AppBar.styled';

export const AppBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isMobile } = useMedia();
  let visible;

  if (isMobile) {
    visible = true;
  } else {
    visible = false;
  }

  const toggleMenu = () => {
    setIsOpenMenu(isOpenMenu => !isOpenMenu);
  };

  return (
    <Header>
      <Logo to="/">WebAppUsers</Logo>
      {!visible && (
        <nav>
          <NavLinkList />
        </nav>
      )}

      {isOpenMenu && <BurgerMenu onCloseMenu={toggleMenu} />}

      <ButtonMenu isVisible={visible} onClick={toggleMenu}>
        {!isOpenMenu ? <OpenMenuIcon /> : <CloseMenuIcon />}
      </ButtonMenu>

      <Border></Border>
    </Header>
  );
};
