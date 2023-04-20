import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectIsLoading,
  selectError,
  selectVisibleUsers,
} from '../redux/users/selectors';

export const useContacts = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleUsers = useSelector(selectVisibleUsers);
  return { users, isLoading, error, visibleUsers };
};
