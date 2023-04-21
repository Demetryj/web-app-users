import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { Modal } from '../Modal';
import { AddUserForm } from '../AddUserForm';
import { ButtonUser } from '../BattonUser';
import { Table, HeadCell, BodyRow, BodyCell } from './DataUsers.styled';

export const DataUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    // isLoading,
    // error,
    visibleUsers,
  } = useUsers();

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);

    const scrollY =
      document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      `${window.scrollY}px`
    );
  });

  return (
    <>
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
      <ButtonUser onClick={openModal}>Add user</ButtonUser>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} isModalOpen={isModalOpen}>
          <AddUserForm onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  );
};
