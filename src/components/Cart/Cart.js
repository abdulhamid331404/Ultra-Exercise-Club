import React from 'react';
import './Cart.css'

const Cart = ({cart,handleAddToTime}) => {
    const {name, img, time, age} = cart
    return (        
        <div className='cart-info'>
                <img src={img} alt="" />
                <div className='cart-details'>
                    <h2> {name}</h2>
                    <p>For Age : {age} years</p>
                    <p>Time required :  {time} minute</p>
                </div>
                <button onClick={()=> handleAddToTime(cart)} className='cart-btn'>
                    <p>Add to Cart</p>
                </button>
        </div>
    );
};

export default Cart;