import { EXERCISE,CREATE_EXERCISE,DELETE_EXERCISE,GET_EXERCISE,UPDATE_EXERCISE } from './client/endpoints';
import { Axios } from './client/index';

// get exervises
export const getExercises = () => {
  return Axios.get(EXERCISE);
};

// delete exervises
export const deleteExercise = (id) => {
  return Axios.delete(`${DELETE_EXERCISE}/${id}`);
};
//add exervises
export const addExercises = (exercise) => {
  return Axios.post(CREATE_EXERCISE,exercise);
};

// get single exervise
export const getSingleExercise = (id) => {
  return Axios.get(`${GET_EXERCISE}/${id}`);
};

//update exervise
export const updateExercises = (id,exercise) => {
  return Axios.post(`${UPDATE_EXERCISE}/${id}`,exercise);
};
