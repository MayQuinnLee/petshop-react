import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Toy', type: 'cute'},
    {label: 'Hero', type: 'wolfPupps'},
    {label: 'Lover', type: 'sheepPupps'},
    {label: 'Salivary', type: 'flatFacePupps'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.Family1}>
            <p className={classes.Family2}>New Family Memberr: <strong>{props.price.toFixed(0)}</strong></p>
        </div>

        {controls.map(ctrl => (
            <BuildControl 
            key = {ctrl.label}
            label = {ctrl.label}
            added = { () => props.newKid(ctrl.type)}
            removed = { () => props.lessKid(ctrl.type)}
            disabled= {props.disabled[ctrl.type]}
            />
        ))}
         
        <button
        onClick={props.purchase}
        disabled={!props.purchasable}
        className={classes.GoHomeButton}
        >LET'S GO HOME</button>
    </div>
)

export default buildControls;