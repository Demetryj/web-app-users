import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteUser } from '../redux/users/operations';

export const usePerson = data => {
  //   const dispatch = useDispatch();

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
  } = data;

  const [nameOfUserV, setNameOfUserV] = useState(nameOfUser);
  const [usernameV, setUsernameV] = useState(username);
  const [emailV, setEmailV] = useState(email);
  const [streetV, setStreetV] = useState(street);
  const [suiteV, setSuiteV] = useState(suite);
  const [cityV, setCityV] = useState(city);
  const [zipcodeV, setZipcodeV] = useState(zipcode);
  const [latV, setLatV] = useState(lat);
  const [lngV, setLngV] = useState(lng);
  const [phoneV, setPhoneV] = useState(phone);
  const [websiteV, setWebsiteV] = useState(website);
  const [nameV, setNameV] = useState(name);
  const [catchPhraseV, setCatchPhraseV] = useState(catchPhrase);
  const [bsV, setBsV] = useState(bs);

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'nameOfUserV':
        setNameOfUserV(value);
        break;
      case 'usernameV':
        setUsernameV(value);
        break;
      case 'emailV':
        setEmailV(value);
        break;
      case 'streetV':
        setStreetV(value);
        break;
      case 'suiteV':
        setSuiteV(value);
        break;
      case 'cityV':
        setCityV(value);
        break;
      case 'zipcodeV':
        setZipcodeV(value);
        break;
      case 'latV':
        setLatV(value);
        break;
      case 'lngV':
        setLngV(value);
        break;
      case 'phoneV':
        setPhoneV(value);
        break;
      case 'websiteV':
        setWebsiteV(value);
        break;
      case 'nameV':
        setNameV(value);
        break;
      case 'catchPhraseV':
        setCatchPhraseV(value);
        break;
      case 'bsV':
        setBsV(value);
        break;

      default:
        return;
    }
  };

  //   const hendleSubmit = event => {
  //     event.preventDefault();
  //     dispatch(
  //       deleteUser({
  //         id,
  //         name: nameOfUserV,
  //         username: usernameV,
  //         email: emailV,
  //         address: {
  //           street: streetV,
  //           suite: suiteV,
  //           city: cityV,
  //           zipcode: zipcodeV,
  //           geo: {
  //             lat: latV,
  //             lng: lngV,
  //           },
  //         },
  //         phone: phoneV,
  //         website: websiteV,
  //         company: {
  //           name: nameV,
  //           catchPhrase: catchPhraseV,
  //           bs: bsV,
  //         },
  //       })
  //     );
  //   };

  const newDataUser = {
    id,
    name: nameOfUserV,
    username: usernameV,
    email: emailV,
    address: {
      street: streetV,
      suite: suiteV,
      city: cityV,
      zipcode: zipcodeV,
      geo: {
        lat: latV,
        lng: lngV,
      },
    },
    phone: phoneV,
    website: websiteV,
    company: {
      name: nameV,
      catchPhrase: catchPhraseV,
      bs: bsV,
    },
  };
  return {
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
  };
};
