import React, { useContext } from 'react';

import { SlEqualizer } from "react-icons/sl";
import Item from './Item';
import { SetCartData } from '../../../Root';
const Items = ({name}) => {
    const {cart,wishlist} = useContext(SetCartData);
    return (
        <div>
            <div className='flex justify-between items-center '>   
                <p className='font-bold mt-2'>Cart</p>
                <div className='flex gap-4'>
                    <p className='font-bold mt-2'>Total Cost: </p>
                <button className='flex gap-2 btn btn-outline btn-primary '>Sort by Price <span><SlEqualizer /></span></button>
                <button className='btn btn-primary'>Purchase</button></div>
            </div>
            <div>
            {
                name==="cart"? <Item gadgets={cart} /> : <Item gadgets={wishlist} />
            }
        </div>
        </div>
    );
};

export default Items ;