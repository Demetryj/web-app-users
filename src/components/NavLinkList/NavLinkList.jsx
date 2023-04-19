import { NavList, NavItem } from './NavLinkList.styled';

const navRoutes = [
  { item: 'Users', route: '/users' },
  { item: 'Person', route: 'person' },
];

export const NavLinkList = ({ mobile }) => {
  return (
    <NavList mobile={mobile}>
      {navRoutes.map(({ item, route }) => {
        return (
          <li key={item}>
            <NavItem to={route} mobile={mobile}>
              {item}
            </NavItem>
          </li>
        );
      })}
    </NavList>
  );
};
