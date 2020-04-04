import React from 'react';
import DogPaw from '../../assets/images/DogPaw.png';
import classes from './Logo.module.css';

const logo = () => (
    <div>
        <img src={DogPaw} alt='dogPaw' className={classes.Logo}/>
    </div>
)

export default logo;