import { NavLink } from 'react-router-dom';
import { Wrapper, Title, Text, LinkBtn } from './Welcome.styled';

export const Welcome = () => {
  return (
    <Wrapper>
      <Title>
        APPLICATION <br />
        ABOUT OUR USERS
      </Title>
      <Text>
        This application contains information about all users, provides the
        ability to search for a user, view and edit user data, add and delete
        users.
      </Text>
      <NavLink to="users">
        <LinkBtn type="button">Go to the users list</LinkBtn>
      </NavLink>
    </Wrapper>
  );
};
