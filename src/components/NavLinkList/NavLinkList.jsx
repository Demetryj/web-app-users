import { NavList, NavItem } from './NavLinkList.styled';

const navRoutes = [
  { item: 'Users', route: 'users' },
  { item: 'Person', route: 'users/:userId' },
];

export const NavLinkList = ({ mobile, onCloseMenu }) => {
  return (
    <NavList mobile={mobile}>
      {navRoutes.map(({ item, route }) => {
        return (
          <li key={item} onClick={onCloseMenu}>
            <NavItem to={route} mobile={mobile}>
              {item}
            </NavItem>
          </li>
        );
      })}
    </NavList>
  );
};
