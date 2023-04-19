import { NavLinkList } from '../NavLinkList/NavLinkList';
import { MenuWrapper } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  return (
    <MenuWrapper>
      <NavLinkList mobile />
    </MenuWrapper>
  );
};
