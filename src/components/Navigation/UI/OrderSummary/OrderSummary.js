import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.module.css';

const orderSummary = (props) => {

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A home filled with love, laughter and joy!</p>
            <ul>
                {orderSummary}
            </ul>
            <p><strong>Total new members: {props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <button clicked={props.purchaseCancelled} className={classes.Danger}>CANCEL</button>
            <button clicked={props.purchaseContinued} className={classes.Success}>CONTINUE</button>
        </Auxiliary>
    )
}

export default orderSummary;