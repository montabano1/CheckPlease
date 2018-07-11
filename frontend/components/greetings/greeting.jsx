import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if(this.props.username) {
      return (
        <div>
          Welcome, { this.props.username }
          <button onClick={this.props.logout}>Get out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    }

  }



}

export default Greeting;
