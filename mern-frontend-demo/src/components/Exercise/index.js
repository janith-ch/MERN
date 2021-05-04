import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/route-paths';

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>

    <td>
      <Link to={`${RoutePaths.edit}${props.exercise._id}`}>edit</Link>| |
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

Exercise.propTypes = {
  deleteExercise: PropTypes.func,
  exercise: PropTypes.shape({
    _id: PropTypes.any,
    date: PropTypes.shape({
      substring: PropTypes.date
    }),
    description: PropTypes.string,
    duration: PropTypes.string,
    username: PropTypes.string
  })
};
export default Exercise;
