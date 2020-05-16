/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';

import NavigationItem from '../NavigationItem';
import classes from './style.css';

export default (props) => (
    <ul className={classes.Links}>
        <NavigationItem link="/">Home which is same as Landing Page here</NavigationItem>
        <NavigationItem link="/orders">If you wanna go to orders page</NavigationItem>
        <NavigationItem link="/sign-in">If you wanna go to orders page</NavigationItem>
    </ul>
);
