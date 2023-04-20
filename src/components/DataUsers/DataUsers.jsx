import { Table, HeadCell, BodyRow, BodyCell } from './DataUsers.styled';

export const DataUsers = ({ items }) => {
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
        {items.map(({ id, name, username }) => (
          <BodyRow key={id}>
            <BodyCell>{id}</BodyCell>
            <BodyCell>{name}</BodyCell>
            <BodyCell>{username}</BodyCell>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};
