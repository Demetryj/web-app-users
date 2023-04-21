import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { DataUsers } from '../components/DataUsers';
import { SearchUser } from '../components/SearchUser/';
import { getUsers } from '../redux/users/operations';
import { Section } from '../components/Section';
import { useUsers } from '../hooks/useUsers';
import { Loader } from '../components/Loader';

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (error) {
    toast.error(error.message);
    return;
  }

  return (
    <Section>
      {isLoading && <Loader />}

      {!isLoading && !error && (
        <>
          <SearchUser />
          <DataUsers />
        </>
      )}
    </Section>
  );
};

export default Users;
