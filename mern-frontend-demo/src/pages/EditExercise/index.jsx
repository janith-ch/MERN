/** @format */

import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { getSingleExercise,updateExercises } from '../../services/exercise';
import { getUsers } from '../../services/user';
import 'react-datepicker/dist/react-datepicker.css';

class EditExercises extends Component {
  state = {
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount() {
    this.fetchExercises();
    this.fetchUsers();
   
   }
    
  fetchExercises = async () => {
    try {
      
      const response = await getSingleExercise(this.props.match.params.id);

     this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
    
    } catch(e) {
      // error handling
    }
  }
  fetchUsers = async () => {
    try{
      const response = await getUsers();

      this.setState({ users: response.data.map((user) => user.username) });
    
    } catch(e) {
      // error handling
    }
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    const excercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    
    try{
      const response = await updateExercises(this.props.match.params.id,excercise);
      console.log(response.data);
    
    } catch(e) {
      // error handling
    }
  
    this.setState({ description: '' });
    this.setState({ duration: '' });
    this.setState({ date: new Date() });
    //window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <select
              ref={(el) => (this.inputElement = el)}
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label> Description</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label> Duration (minutes)</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label> Date</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
    
EditExercises.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
     
    })
  }),
}
export default EditExercises;
