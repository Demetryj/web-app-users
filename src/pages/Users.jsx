import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DataUsers } from '../components/DataUsers/DataUsers';
import { SearchUser } from '../components/SearchUser/SearchUser';
import { getUsers } from '../redux/users/operations';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <section>
      <SearchUser />
      <DataUsers />
    </section>
  );
};

export default Users;
