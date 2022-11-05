import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
          <h3>Order Summery</h3>
          <h4>Order quantity : {cart.length}</h4>  
        </div>
    );
};

export default Cart;