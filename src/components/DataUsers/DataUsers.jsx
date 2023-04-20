import { useNavigate } from 'react-router-dom';
import { Table, HeadCell, BodyRow, BodyCell } from './DataUsers.styled';
import { useUsers } from '../../hooks/useUsers';

export const DataUsers = () => {
  const {
    // isLoading,
    // error,
    visibleUsers,
  } = useUsers();

  const navigate = useNavigate();

  return (
    <Table>
      <thead>
        <tr>
          <HeadCell>id</HeadCell>
          <HeadCell>name</HeadCell>
          <HeadCell>username</HeadCell>
        </tr>
      </thead>

      <tbody>
        {visibleUsers.map(({ id, name, username }) => (
          <BodyRow key={id} onClick={() => navigate(`/users/${id}`)}>
            <BodyCell>{id}</BodyCell>
            <BodyCell>{name}</BodyCell>
            <BodyCell>{username}</BodyCell>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};
