/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './style.css';

export default (props) => (
  <li className={classes.Link}>
    <NavLink exact to={props.link} activeStyle={{ color: '#F95E6D' }}>
      {props.children}
    </NavLink>
  </li>
);
