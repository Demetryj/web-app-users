import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../redux/users/operations';
import { Section } from '../components/Section';
import { User } from '../components/User';

const Person = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  return (
    <Section>
      <User />
    </Section>
  );
};

export default Person;
