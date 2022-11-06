import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Darling = () => {
const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <p>Gift :{house}</p>
            <button onClick={()=> setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Darling;