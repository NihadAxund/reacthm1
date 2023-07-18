
import {
  Navbar
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <button style={{color:'white',backgroundColor:'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{color:'white',backgroundColor:'white'}} className="navbar-toggler-icon"></span>
          </button>
        </Navbar>
      </div>
    )
  }
}
