import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
		this.handleSubmit = this.handleSubmit.bind(this);
  }

	update(field) {
	    return (e) => {
	      this.setState({[field]: e.target.value});
	    };
	  }

	handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

	render() {
		if(this.props.formType === 'signup') {
      return (
        <div>
					<h1>SIGN UP</h1>
          <Link to='/login'>Log In</Link>
					<form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label> Password
            <input
							type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
        </div>
      );
    } else {
      return (
				<div>
					<h1>Log In</h1>
          <Link to='/signup'>Sign Up</Link>
					<form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label> Password
            <input
							type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
