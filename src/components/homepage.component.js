import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        
        this.onChangefname = this.onChangefname.bind(this);
        this.onChangelname = this.onChangelname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          fname: '',
          lname: '',
          username: '',
          password: '',
          gender: '',
          age: '',
          weight: '',
          height: '',
        }
    }

    onChangefname(e) {
        this.setState({
          fname: e.target.value
        })
      }
      onChangelname(e) {
        this.setState({
          lname: e.target.value
        })
      }
    
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
    
    onChangePassword(e) {
    this.setState({
           password: e.target.value
       })
    }

    onChangeGender(e) {
        this.setState({
          gender: e.target.value
        })
      }

    onChangeAge(e) {
        this.setState({
          age: e.target.value
        })
      }
    
    onChangeWeight(e) {
        this.setState({
          weight: e.target.value
        })
    }

    onChangeHeight(e) {
        this.setState({
          height: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
          fname: this.state.fname,
          lname: this.state.lname,
          username: this.state.username,
          password: this.state.password,
          gender: this.state.gender,
          age: this.state.age,
          weight: this.state.weight,
          height: this.state.height
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        //window.location = '/';
      }

    render(){
        return(
            <div className="container">
                <h1>Welcome to ExerTrack!</h1>
                <h2>Create Your Account</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Your Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.fname}
                            onChange={this.onChangefname}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Your Lastname: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.lname}
                            onChange={this.onChangelname}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Create a Unique Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Password: </label>
                        <input  type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Gender: </label>
                        <div></div>
                        <input  type="radio"
                            name="gender"
                            required
                            checked={this.state.gender === "Male"}
                            //className="form-control"
                            value="Male"
                            onChange={this.onChangeGender}
                        /> Male<div></div>
                        <input  type="radio"
                            name="gender"
                            required
                            checked={this.state.gender === "Female"}
                            //className="form-control"
                            value="Female"
                            onChange={this.onChangeGender}
                        /> Female
                    </div>
                    <div className="form-group"> 
                        <label>Age: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Approximate Weight(in lb): </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Approximate Height(in cm): </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.height}
                            onChange={this.onChangeHeight}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>   
        )
    }
}



