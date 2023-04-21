import { useState } from 'react';

export const useAddUser = () => {
  const [nameOfUserV, setNameOfUserV] = useState('');
  const [usernameV, setUsernameV] = useState('');
  const [emailV, setEmailV] = useState('');
  const [streetV, setStreetV] = useState('');
  const [suiteV, setSuiteV] = useState('');
  const [cityV, setCityV] = useState('');
  const [zipcodeV, setZipcodeV] = useState('');
  const [latV, setLatV] = useState('');
  const [lngV, setLngV] = useState('');
  const [phoneV, setPhoneV] = useState('');
  const [websiteV, setWebsiteV] = useState('');
  const [nameV, setNameV] = useState('');
  const [catchPhraseV, setCatchPhraseV] = useState('');
  const [bsV, setBsV] = useState('');

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

  const newUser = {
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
    newUser,
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
