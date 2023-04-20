import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DataUsers } from '../components/DataUsers/DataUsers';
import { SearchUser } from '../components/SearchUser/SearchUser';
import { getUsers } from '../redux/users/operations';
import { Section } from '../components/Section';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Section>
      <SearchUser />
      <DataUsers />
    </Section>
  );
};

export default Users;
