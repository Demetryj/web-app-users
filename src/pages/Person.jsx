import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../redux/users/operations';

import { UserData } from '../components/User/User';

const Person = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  return (
    <section>
      <UserData />
    </section>
  );
};

export default Person;
