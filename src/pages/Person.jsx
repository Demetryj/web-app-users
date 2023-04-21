import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getUserById } from '../redux/users/operations';
import { Section } from '../components/Section';
import { User } from '../components/User';
import { useUsers } from '../hooks/useUsers';
import { Loader } from '../components/Loader';

const Person = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isLoading, error } = useUsers;

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  if (error) {
    toast.error(error.message);
    return;
  }

  return (
    <Section>
      {isLoading && <Loader />}

      {!isLoading && !error && <User userId={userId} />}
    </Section>
  );
};

export default Person;
