import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = () => (
    <ul className={classes.NavigationItem}>
        <li><a href='/' className={classes.active}> Paw Family</a></li>
        <li ><a href='/'> Something</a></li>
    </ul>
)

export default navigationItem;