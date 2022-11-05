import React from 'react';
import './Tshir.css'
const Tshirt = ({tshirt}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>Name : {name}</h2>
            <h4>Price : {price}</h4>
            <button>Buy this</button>
        </div>
    );
};

export default Tshirt;