import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House:{house}</small></p>
            <section className='flex'>
                <Cusin></Cusin>
                <Cusin></Cusin>
            </section>
        </div>
    );
};

export default Aunty;