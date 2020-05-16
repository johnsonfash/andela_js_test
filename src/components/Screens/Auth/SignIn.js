/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { Offline, Online } from "react-detect-offline";
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from '@material-ui/core/styles/withStyles';
import { fetchUserData } from '../../../store/actions/user'
// import history from '../../../history';
import { NavLink, Link, withRouter } from 'react-router-dom'
import { isAuthenticated, removeAuthenticatedState, authenticateUser } from '../../../services/Auth'

const styles = (theme) => ({
	...theme.spreadthis
});

// @desc  A function to check if user is authenticated. Check if token exists
// @ex    const isAuth = isAuthenticated()
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email_signIn: '',
			password_signIn: '',
			keep_signIn: false,
			username_signUp: '',
			password_signUp: '',
			password_repeat: '',
			email_signUp: '',
			loading: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.slide = this.slide.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleChange(e) {
		this.setState(
			{
				[e.target.id]: e.target.value
			}
		)
	}

	slide(e) {

	}


	handleSubmit(e) {
		e.preventDefault()
		let { fetchData, userData } = this.props
		fetchData(this.state.email_signIn)
		this.setState({
			email_signIn: '',
			password_signIn: '',
			keep_signIn: false,
			username_signUp: '',
			password_signUp: '',
			password_repeat: '',
			email_signUp: '',
			loading: true
		})
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.log(errorInfo)
		// logErrorToMyService(error, errorInfo);
	}

	componentDidUpdate(prevProps) {
		let { userData } = this.props.userData
		if (this.props !== prevProps) {
			if (isAuthenticated()) {
				this.props.history.push('/order')
			} else {
				if (userData.length !== 0) {
					authenticateUser(userData.email, 'customer')
					this.props.history.push('/order')
				}
			}
		}
	}

	render() {
		let { email_signIn, password_signIn, keep_signIn, username_signUp, password_signUp, password_repeat, email_signUp } = this.state
		let { loading, error, errorMessage } = this.props.userData
		let u = '';
		let f = ''
		error === 'true' && errorMessage !== '' ? (f = <span className="error">{errorMessage}</span>) : (f = '')
		loading === 'done' ? (u = 'Submit') :
			(loading === 'true' ? (u = <div id="loader"></div>) : (u = 'Submit'))
		return (
			<Fragment>
				{/* <Online><h1> {u}</h1></Online> */}
				<Offline> <h1> <span>Offline</span> </h1> </Offline>
				<div className="sign_in_container">
					<div className="login-wrap">
						<div className="login-html">
							<input id="tab-1" type="radio" name="tab" className="sign-in" checked onChange={this.slide} />
							<label htmlFor="tab-1" className="tab">Sign In</label>
							<input id="tab-2" type="radio" name="tab" className="sign-up" onChange={this.slide} />
							<label htmlFor="tab-2" className="tab">Sign Up</label>
							<div className="login-form">

								<form onSubmit={this.handleSubmit}>
									<div className="sign-in-htm">
										<div className="group">
											<label htmlFor="email_signIn" className="label">Email</label>
											<input id="email_signIn" value={email_signIn} type="text" className="input" onChange={this.handleChange} required autoComplete="on" />
											{f}
										</div>
										<div className="group">
											<label htmlFor="password_signIn" className="label">Password</label>
											<input id="password_signIn" value={password_signIn} type="password" className="input" data-type="password" onChange={this.handleChange} required />
											{f}
										</div>
										<div className="group">
											<input id="keep_signIn" value={keep_signIn} type="checkbox" className="check" onChange={this.handleChange} />
											<label htmlFor="keep_signIn"><span className="icon"></span> Keep me Signed in</label>
										</div>
										<div className="group">
											<button type="submit" className="button"> {u}</button>
										</div>
										<div className="hr"></div>
										<div className="foot-lnk">
											<Link to="/forgot">Forgot Password?</Link>
										</div>
									</div>
								</form>

								<form onSubmit={this.handleSubmit}>
									<div className="sign-up-htm">
										<div className="group">
											<label htmlFor="username_signUp" className="label">Username</label>
											<input id="username_signUp" value={username_signUp} type="text" className="input" onChange={this.handleChange} required />
										</div>
										<div className="group">
											<label htmlFor="password_signUp" className="label">Password</label>
											<input id="password_signUp" value={password_signUp} type="password" className="input" data-type="password" onChange={this.handleChange} required />
										</div>
										<div className="group">
											<label htmlFor="password_repeat" className="label">Repeat Password</label>
											<input id="password_repeat" type="password" value={password_repeat} className="input" data-type="password" onChange={this.handleChange} required />
										</div>
										<div className="group">
											<label htmlFor="email_signUp" className="label">Email Address</label>
											<input id="email_signUp" type="text" value={email_signUp} className="input" onChange={this.handleChange} required autoComplete="on" />
										</div>
										<div className="group">
											<button type="submit" className="button" > {u} </button>
										</div>
										<div className="hr"></div>
										<div className="foot-lnk">
											<Link to="/sign-in">Already Member?</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		userData: state.userData
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (name) => dispatch(fetchUserData(name))
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styles)
)(Login)
