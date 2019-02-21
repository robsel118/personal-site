import axios from 'axios';
import { User } from '@/utils/interfaces';
import { storeItem } from '@/storage/StorageHandler';

const setCookie = (token): void => {
  const date = new Date();
  date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 365);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${'jwt-token='}${token || ''}${expires}; path=/`;
};

const getCookie = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; jwt-token=');
  if (parts.length === 2) {
    return `Token ${parts
      .pop()
      .split(';')
      .shift()}`;
  }
  return null;
};

export /**
 *  Register a new user
 *
 * @param {User} form
 */
const registerUser = async (form: User) => {
  axios
    .post('http://localhost:8081/api/auth/register', { user: form })
    .then((response) => {
      setCookie(response.data.user.token);
    })
    .catch((error) => {
      console.log(error);
    });
};

export /**
 * Login the user
 *
 * @param {User} credentials
 */
const loginUser = async (credentials: User) => {
  axios
    .post('http://localhost:8081/api/auth/login', { user: credentials })
    .then((response) => {
      setCookie(response.data.user.token);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCurrentUser = async () => {
  const token = getCookie();
  axios
    .get('http://localhost:8081/api/auth/current', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
