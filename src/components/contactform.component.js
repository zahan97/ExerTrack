import React, { Component } from 'react';
import axios from 'axios';

export default class Cform extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUni = this.onChangeUni.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      users: '',
      daylist: [
            "Morning",
            "Afternoon",
            "Evening",
            "Night"
      ],
      unilist: [
          "University of Southern California(USC)",
          "New York University(NYU)",
          "University of California, Irvine(UCI)",
          "San Jose State University(SJSU)",
          "University of Washington, Seatle(UWash)",
          "Arizona State University(ASU)"
      ],
      uni: '',
      time: ''
    }

    this.state.uni = this.state.unilist[0];
    this.state.time = this.state.daylist[0];
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeUni(e) {
    this.setState({
      uni: e.target.value
    })
  }
  
  onChangeTime(e) {
    this.setState({
      time: e.target.value
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
    .then(response => {
    if (response.data.length > 0) {
      this.setState({
        users: response.data.map(user => user.username),
      })
    }
    })
    .catch((error) => {
        console.log(error);
  })
}
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.users[this.state.users.length - 1],
      email: this.state.email,
      uni: this.state.uni,
      time: this.state.time
    }

    console.log(user);

      axios.post('http://localhost:5000/users/add/contact', user)
      .then(res => console.log(res.data));
    
    window.location = '/';

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <span className="navbar-brand mb-0 h1">ExerTrack</span>
        </nav>
        <div className="container">
        <h2>Enter your details-</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="email"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Prefered Exercise Time: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}>
              {
                this.state.daylist.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
          </div>
          <div className="form-group"> 
            <label>Select your University: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.uni}
              onChange={this.onChangeUni}>
              {
                this.state.unilist.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
            </select>
            </div>
          <div className="form-group">
            <input type="submit" value="Submit and Log In" className="btn btn-primary" />
          </div>
        </form>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3"><span>© 2019 Copyright: </span>
            <a href="https://www.linkedin.com/in/zahan97/">Zahan Shahana</a>
            </div>
            </footer>
      </div></div>
    )
  }
}