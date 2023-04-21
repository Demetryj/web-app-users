import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  MainTitle,
  WrapperData,
  ItemTitle,
  Box,
  Subtitle,
  Value,
  ButtonBox,
} from './User.styled';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import { useUsers } from '../../hooks/useUsers';
import { ButtonUser } from '../BattonUser';
import { Modal } from '../Modal';
import { UpdateForm } from '../UpdateForm';

export const User = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const { users, person } = useUsers();

  const increment = userId => {
    if (userId >= users.length) {
      toast.error('No more users!');
      return;
    }
    navigate(`/users/${Number(userId) + 1}`);
  };

  const decrement = userId => {
    if (userId <= 1) {
      toast.error('No more users!');
      return;
    }
    navigate(`/users/${Number(userId) - 1}`);
  };

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

  const {
    id,
    name: nameOfUser,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },

    phone,
    website,
    company: { name, catchPhrase, bs },
  } = person;

  return (
    <>
      <MainTitle>User</MainTitle>

      <WrapperData>
        <Box>
          <li>
            <Subtitle>
              id: <Value>{id}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Name: <Value>{nameOfUser}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Username: <Value>{username}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Email: <Value>{email}</Value>
            </Subtitle>
          </li>
        </Box>

        <ItemTitle>Address</ItemTitle>
        <Box>
          <li>
            <Subtitle>
              Street: <Value>{street}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Suite: <Value>{suite}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              City: <Value>{city}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Zipcode: <Value>{zipcode}</Value>
            </Subtitle>
          </li>
        </Box>

        <ItemTitle>Geo</ItemTitle>
        <Box>
          <li>
            <Subtitle>
              Lat: <Value>{lat}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Lng: <Value>{lng}</Value>
            </Subtitle>
          </li>
        </Box>

        <Box>
          <li>
            <Subtitle>
              Phone: <Value>{phone}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Website: <Value>{website}</Value>
            </Subtitle>
          </li>
        </Box>

        <ItemTitle>Company</ItemTitle>
        <Box>
          <li>
            <Subtitle>
              Name: <Value>{name}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Catch Phrase: <Value>{catchPhrase}</Value>
            </Subtitle>
          </li>
          <li>
            <Subtitle>
              Bs: <Value>{bs}</Value>
            </Subtitle>
          </li>
        </Box>
      </WrapperData>

      <ButtonBox>
        <ButtonUser onClick={() => decrement(userId)}>
          <FiArrowLeft />
          Prev
        </ButtonUser>
        <ButtonUser onClick={openModal}>Update data</ButtonUser>
        <ButtonUser onClick={() => increment(userId)}>
          Next <FiArrowRight />
        </ButtonUser>
      </ButtonBox>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} isModalOpen={isModalOpen}>
          <UpdateForm data={person} onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  );
};
