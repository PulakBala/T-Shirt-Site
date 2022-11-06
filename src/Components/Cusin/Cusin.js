import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cusin = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House:{house}</small></p>
            <button onClick={()=> setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Cusin;