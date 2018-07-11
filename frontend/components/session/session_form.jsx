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
		if(this.props.formType === 'Sign up') {
      return (
        <div className='login-form'>
					<div id='please-sign-up'>
            <h3 >Sign up!</h3>
          </div>
					<form onSubmit={this.handleSubmit} className='login-form'>
              <input
                className='email-input'
                type="text"
                placeholder='email'
                onChange={this.update('username')} />
              <input
                className='password-input'
  							type="password"
                placeholder='password'
                onChange={this.update('password')} />
            <input className='submit-button' type="submit" value={this.props.formType} />
          </form>
        </div>
      );
    } else {
      return (
				<div className='login-form'>
					<div id='please-sign-in'>
            <h3 >Please sign in</h3>
          </div>
					<form onSubmit={this.handleSubmit} className='login-form'>
              <input
                className='email-input'
                type="text"
                placeholder='email'
                onChange={this.update('username')} />
              <input
                className='password-input'
  							type="password"
                placeholder='password'
                onChange={this.update('password')} />
              <div className='forgot-password'>
                <a href="#">Forgot Password?</a>
              </div>
            <input className='submit-button' type="submit" value={this.props.formType} />
          </form>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
