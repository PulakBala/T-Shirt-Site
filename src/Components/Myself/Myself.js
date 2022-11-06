import React from 'react';
import Darling from '../Darling/Darling';

const Myself = ({house}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p><small>House:{house}</small></p>
            <Darling></Darling>
        </div>
    );
};

export default Myself;