import { USER_CREATE,USERS } from './client/endpoints';
import { Axios } from './client/index';
// create user
export const createUser = (data) => {
  return Axios.post(USER_CREATE, data);
};
//get users
export const getUsers = () => {
  return Axios.get(USERS);
};