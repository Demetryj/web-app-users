import { NavLinkList } from '../NavLinkList/NavLinkList';
import { MenuWrapper } from './BurgerMenu.styled';

export const BurgerMenu = ({ onCloseMenu }) => {
  return (
    <MenuWrapper>
      <NavLinkList mobile onCloseMenu={onCloseMenu} />
    </MenuWrapper>
  );
};
