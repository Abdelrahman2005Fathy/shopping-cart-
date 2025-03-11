import '../styles/Product.css';

import React from 'react';

import { useDispatch } from 'react-redux';

import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../../slice/shoppingSlice';
import { Product } from '../types/types';

const Product = ({name, price, image, quantity}: Product) => {
 
  const dispatch = useDispatch()
  // دوال لزيادة وتقليل الكمية

  return (
    <div className="container">
      <img src={image} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      
      <div className="quantity-container">
        <p>Quantity:</p>
        <button className="quantity-btn" onClick={()=>dispatch(decreaseQuantity({name}))}>-</button>
        <span className="quantity-value">{quantity}</span>
        <button className="quantity-btn" onClick={()=>dispatch(increaseQuantity({name}))}>+</button>
      </div>
      
      <button onClick={()=>dispatch(removeItem({name}))}>Remove from Cart</button>
    </div>
  );
};

export default Product;
