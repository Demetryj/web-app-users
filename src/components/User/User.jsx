import { useUsers } from '../../hooks/useUsers';
import { MainTitle, ItemTitle, Box, Subtitle, Value } from './User.styled';

export const UserData = () => {
  const {
    person,
    // isLoading,
    // error,
  } = useUsers();

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

      <div>
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
      </div>
    </>
  );
};
