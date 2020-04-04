import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle} onClick={props.clickSideDrawer}> 
            <div ></div>
            <div ></div>
            <div ></div>
        </div>

        <div className={classes.Logo}>
            <Logo />
        </div>

        <nav className={classes.navigation}>
            <NavigationItem/>
        </nav>
    </header>
)
export default toolbar;