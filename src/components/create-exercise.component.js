import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeExe = this.onChangeExe.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeSets = this.onChangeSets.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      exe: '',
      reps: 0,
      sets: 0,
      duration: 0,
  
    }
  }

  componentDidMount() {

  }

  onChangeExe(e) {
    this.setState({
      exe: e.target.value
    })
  }

  onChangeReps(e) {
    this.setState({
      reps: e.target.value
    })
  }

  onChangeSets(e) {
    this.setState({
      sets: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.props.username,
      exe: this.state.exe,
      reps: this.state.reps,
      sets: this.state.sets,
      duration: this.state.duration,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    this.setState({
      exe: '',
      reps: 0,
      sets: 0,
      duration: 0,
    })
  }

  render() {
    return (
    <div>
        <div className="container">
      <h2>Add an Exercise-</h2>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Exercise Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.exe}
              onChange={this.onChangeExe}
              />
        </div>
        <div className="form-group"> 
          <label>Reps: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.reps}
              onChange={this.onChangeReps}
              />
        </div>
        <div className="form-group"> 
          <label>Sets: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.sets}
              onChange={this.onChangeSets}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Add -> Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
    )
  }
}