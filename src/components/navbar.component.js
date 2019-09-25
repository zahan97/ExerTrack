import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <h1 className="navbar-brand mb-0 h1">ExerTrack</h1>
      </nav>
    );
  }
}
