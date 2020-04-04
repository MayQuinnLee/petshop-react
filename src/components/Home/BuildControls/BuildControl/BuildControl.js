import React from 'react';
import classes from './BuildControl.module.css';
import ButtonRoof from '../../../../assets/images/ButtonRoof.png';

const buildControl = (props) => (
    <div className={classes.BuildControl}>

        <button 
        onClick = {props.removed}
        disabled={props.disabled}
        className={classes.Less}>
        Can't cope with the &nbsp;<div className={classes.Heart}></div></button>

        <div className={classes.Label}>{props.label}</div>

        <button
        className={classes.More}
        onClick = {props.added}
        >Bring Me&nbsp;<img src={ButtonRoof} alt='roof' style={{height: '1em' }}/></button>
    </div>
)

export default buildControl;