/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import history from '../../history';
import Login from '../../components/Screens/Auth/SignIn'
import { NavLink, Link } from 'react-router-dom'
import './styles.css'
import { isAuthenticated } from '../../services/Auth';

const styles = (theme) => ({
  ...theme.spreadthis
});

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      see: []
    };
  };

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/order')
    }
  }

  render() {
    return (
      <div className='image-background '>
        <div className='grid-d-50 grid-m-100'>
          <Login />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
