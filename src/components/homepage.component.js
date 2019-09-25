import React, { Component } from 'react';
import axios from 'axios';


export default class Homepage extends Component {
    constructor(props) {
        super(props);
        
        this.onChangefname = this.onChangefname.bind(this);
        this.onChangelname = this.onChangelname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeNewU = this.onChangeNewU.bind(this);
        this.onChangeNewP = this.onChangeNewP.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
    
        this.state = {
          fname: '',
          lname: '',
          username: '',
          password: '',
          gender: '',
          age: '',
          weight: '',
          height: '',
          users: [],
          pwords: [],
          newu: '',
          newp: ''
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
      onChangeNewU(e) {
        this.setState({
          newu: e.target.value
        })
      }
      onChangeNewP(e) {
        this.setState({
          newp: e.target.value
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

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            pwords: response.data.map(user => user.password),
          })
        }
        })
        .catch((error) => {
            console.log(error);
      })
    }
    onSubmit2(e) {
        e.preventDefault();
    
        var flagy = 0;
        for (let i = 0; i < this.state.users.length; i++) {
            if(this.state.users[i] === this.state.newu && this.state.pwords[i] === this.state.newp){
                flagy = 1;
            
            }
        }
        if(flagy === 1)
        {
            console.log("Auth Ok");
            window.location = '/main';
            
            //this.props.history.push({pathname: '/main', data: this.state.newu})
        }
        else{
            alert("Enter Valid details");
        }
        
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
        
        window.location = '/contact';
      }

    render(){
        return(
            <div>
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <h1 className="navbar-brand mb-0 h1">ExerTrack</h1>
                <form className="form-inline" onSubmit={this.onSubmit2}>
                    <input className="form-control mr-sm-2" type="input"  placeholder="Username"
                    required value={this.state.newu} onChange={this.onChangeNewU}/>
                    <input className="form-control mr-sm-2" type="password" placeholder="Password" required
                    value={this.state.newp} onChange={this.onChangeNewP}/>
                    <button className="btn btn-primary" type="submit">Log In
                    </button>
                </form>
            </nav>
            
            <div className="container">
                <div className="row">
                <div className="col-md">
                <h1>&nbsp;&nbsp;</h1>
                
                <h1 className="font-weight-bold">DON'T WISH FOR A GOOD BODY, WORK FOR IT!!</h1>
                </div>
                <div className="col">
                
                <h2>Create Your Account</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-sm-20"> 
                                <label>Your Name: </label>
                                <input  type="text"
                                    required
                                    className="form-control"
                                    value={this.state.fname}
                                    onChange={this.onChangefname}
                                />
                            </div>
                            <div className="col-sm-20">
                                <label>Your Lastname: </label>
                                <input  type="text"
                                    required
                                    className="form-control"
                                    value={this.state.lname}
                                    onChange={this.onChangelname}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                        <div className="col-sm-20"> 
                        <label>Create a Unique Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                        </div>
                    <div className="col-sm-20">
                        <label>Create Password: </label>
                        <input  type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div></div></div>
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
                    <div className="form-row">
                        <div className="col-sm-30">
                        <label>Age: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                        </div>
                        <div className="col-sm-10"></div>
                        <div className="col-sm-30">
                        <label>Weight (in lb): </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                        />
                        </div>
                        <div className="col-sm-10"></div>
                        <div className="col-sm-30">
                        <label>Height (in cm): </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.height}
                            onChange={this.onChangeHeight}
                        /></div>
                        </div>
                        </div>
                    <div className="form-group">
                        <input type="submit" value="Create Account" className="btn btn-primary" />
                    </div>
                </form>
            </div> 
            </div>
            </div>  
            
            <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3"><span>© 2019 Copyright: </span>
            <a href="https://www.linkedin.com/in/zahan97/">Zahan Shahana</a>
            </div>
            </footer>

            </div>
        )
    }
}



