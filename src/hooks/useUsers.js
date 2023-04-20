import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectPerson,
  selectIsLoading,
  selectError,
  selectVisibleUsers,
} from '../redux/users/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const person = useSelector(selectPerson);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleUsers = useSelector(selectVisibleUsers);
  return {
    users,
    person,
    isLoading,
    error,
    visibleUsers,
  };
};
