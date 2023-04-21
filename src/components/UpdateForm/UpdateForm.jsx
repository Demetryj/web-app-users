import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/operations';
import { updateUser } from '../../redux/users/operations';
import { ButtonUser } from '../BattonUser';
import { usePerson } from '../../hooks/usePerson';

import {
  Form,
  Title,
  Wrapper,
  Label,
  Input,
  WrapperButtons,
} from './UpdateForm.styled';

export const UpdateForm = ({ data, onCloseModal }) => {
  const dispatch = useDispatch();

  const {
    handleChangeInput,
    newDataUser,
    id,
    nameOfUserV,
    usernameV,
    emailV,
    streetV,
    suiteV,
    cityV,
    zipcodeV,
    latV,
    lngV,
    phoneV,
    websiteV,
    nameV,
    catchPhraseV,
    bsV,
  } = usePerson(data);

  const hendleSubmit = event => {
    event.preventDefault();
    dispatch(updateUser(newDataUser));
    onCloseModal();
  };

  const onRemoveUser = id => {
    dispatch(deleteUser(id));
    onCloseModal();
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Title>User</Title>
      <Wrapper>
        <Label htmlFor="nameOfUser">
          Name
          <Input
            id="nameOfUser"
            type="text"
            name="nameOfUserV"
            value={nameOfUserV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="username">
          Username
          <Input
            id="username"
            type="text"
            name="usernameV"
            value={usernameV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            name="emailV"
            value={emailV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="street">
          Street
          <Input
            id="street"
            type="text"
            name="streetV"
            value={streetV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="suite">
          Suite
          <Input
            id="suite"
            type="text"
            name="suiteV"
            value={suiteV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="city">
          City
          <Input
            id="city"
            type="text"
            name="cityV"
            value={cityV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="zipcode">
          Zipcode
          <Input
            id="zipcode"
            type="tel"
            name="zipcodeV"
            value={zipcodeV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="lat">
          Lat
          <Input
            id="lat"
            type="number"
            name="latV"
            value={latV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="lng">
          Lng
          <Input
            id="lng"
            type="number"
            name="lngV"
            value={lngV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="phone">
          Phone
          <Input
            id="phone"
            type="tel"
            name="phoneV"
            value={phoneV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="website">
          Website
          <Input
            id="website"
            type="text"
            name="websiteV"
            value={websiteV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="name">
          Name company
          <Input
            id="name"
            type="text"
            name="nameV"
            value={nameV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="catchPhrase">
          Catch Phrase
          <Input
            id="catchPhrase"
            type="text"
            name="catchPhraseV"
            value={catchPhraseV}
            onChange={handleChangeInput}
            required
          />
        </Label>

        <Label htmlFor="bs">
          Bs
          <Input
            id="bs"
            type="text"
            name="bsV"
            value={bsV}
            onChange={handleChangeInput}
            required
          />
        </Label>
      </Wrapper>

      <WrapperButtons>
        <ButtonUser onClick={() => onRemoveUser(id)}>Delete</ButtonUser>
        <ButtonUser type="submit">Update</ButtonUser>
        <ButtonUser onClick={onCloseModal}>Cancel</ButtonUser>
      </WrapperButtons>
    </Form>
  );
};
