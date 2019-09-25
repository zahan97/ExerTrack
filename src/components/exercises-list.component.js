import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateExercise from './create-exercise.component';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.exe}</td>
    <td>{props.exercise.reps}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.duration}</td>
    <td>
      <a href="" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUname = this.onChangeUname.bind(this);
    this.mainmethod = this.mainmethod.bind(this);

    this.state = {
      exercises: [],
      username: '',
      newexe: []
    };
  }

  componentDidMount() {
    
  }

  onChangeUname(e){
    this.setState({
      username: e.target.value
    })
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.newexe.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  onSubmit(e) {
    e.preventDefault();
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

      for (let i = 0; i < this.state.exercises.length; i++) {
        if(this.state.username === this.state.exercises[i].username)
        {
            this.state.newexe[i] = this.state.exercises[i]
        }
      }
    //window.location = '/create';
  }

  mainmethod() {
    this.exerciseList()
  }
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <h1 className="navbar-brand mb-0 h1">ExerTrack</h1>
        </nav>
        </div>
        <div className="container">
          
          <h1> </h1>
          <div>
              <form className="form-inline" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                  <input className="form-control" required type="text" placeholder="Enter Username" value={this.state.username} onChange={this.onChangeUname}/></div>
                  <div className="col">
                    <input type="submit" className="form-control" value="submit" /></div>
                    </div>
              </form>
          </div>
          <h1> </h1>
        <h3>Daily Log</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Exercise</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        
      </div>
      <h1></h1>
      <CreateExercise username = {this.state.username}/>
      
      </div>
    )
  }
}