import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Ulist = props => (
    <button type="button" className="list-group-item list-group-item-action">{props.user.fname}</button>
  )

export default class CreateExercise extends Component {
    constructor(props) {
      super(props);
  
      this.onSubmit = this.onSubmit.bind(this);
      this.uList = this.uList.bind(this);
     
  
      this.state = {
        kings:[],
    
      }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
        if (response.data.length > 0) {
            console.log("in it");
          this.setState({
            kings: response.data
          })
        }
        })
        .catch((error) => {
            console.log(error);
      })

      console.log(this.state.kings)
    }

    

    uList() {
        return this.state.kings.map(currentuser => {
          return <Ulist user={currentuser} key={currentuser._id}/>;
        })
      }

    

    onSubmit(e) {
        e.preventDefault();
        window.location='/main'
    }

    render() {
        return(
            <div>
                <div>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <h1 className="navbar-brand mb-0 h1">ExerTrack</h1>
                    </nav>
                </div>
                <h1></h1>
                <div className="container">
                    <h1> Similar Profiles at Your University</h1>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Jasmin Smith
                            <span className="badge badge-primary badge-pill">Message</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Racheal Rosenbaum
                            <span className="badge badge-primary badge-pill">Message</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Mike Spencer
                            <span class="badge badge-primary badge-pill">Message</span>
                        </li>
                        </ul>
                <hr />
                <div>
                    <Link to="/main"><input type="button" value="<-Back to Logs" className="btn btn-primary"/></Link>
                </div></div>
            </div>
    );
}
}