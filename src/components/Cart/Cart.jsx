/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let totalShippingCharge = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShippingCharge = totalShippingCharge + product.shipping;
    }
    let tax = total * 7 / 100;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShippingCharge}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;