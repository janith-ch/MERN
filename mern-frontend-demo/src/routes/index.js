/** @format */
import React from 'react';
import { Route } from 'react-router-dom';
import CreateExercise from '../pages/CreateExercise';
import EditExercises from '../pages/EditExercise';
import ExercisesList from '../pages/ExerciseList';
import User from '../pages/User';
import { RoutePaths } from './route-paths';

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={ExercisesList} />
      <Route path={`${paths.edit}:id`} component={EditExercises} />
      <Route path={paths.create} component={CreateExercise} />
      <Route path={paths.user} component={User} />
    </>
  );
};

export default Routes;
