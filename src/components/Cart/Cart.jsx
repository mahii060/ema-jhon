/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShippingPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShippingPrice = totalShippingPrice + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShippingPrice + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingPrice}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;