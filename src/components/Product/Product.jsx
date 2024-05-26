/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    // eslint-disable-next-line react/prop-types
    const { name, id, price, quantity, img, seller, ratings } = props.product;

    const addToCart = props.addToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: <span className='product-price'>${price}</span></p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='btn-cart'>Add to Cart {<FontAwesomeIcon icon={faShoppingCart} />}</button>
        </div>
    );
};

export default Product;