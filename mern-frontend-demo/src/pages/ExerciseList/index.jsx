/** @format */

import React, { Component } from 'react';
import Exercise from '../../components/Exercise/index';
import { deleteExercise, getExercises } from '../../services/exercise';

class ExercisesList extends Component {
  state = {
    exercises: [],
  };

  componentDidMount() {
    this.fetchExercises();
  }

  fetchExercises = async () => {
    try{
      const response = await getExercises();

      this.setState({ exercises: response.data || [] });
    
    } catch(e) {
      // error handling
    }
  }

  removeExercise = async (id) => {
    try {
      const response = await deleteExercise(id);

      // check response validation and success logic
      if (response.data) {
        this.setState({
          exercises: this.state.exercises.filter((el) => el._id !== id),
        });
      }

    } catch(e) {
      // error handling
    }
  }

  exercisesList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.removeExercise}
          key={currentexercise._id}
        />
      );
    });
  }
 
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.exercisesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
