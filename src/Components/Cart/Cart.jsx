import React, { useContext } from 'react';
import { SetCartData } from '../../Root';

const Cart = () => {
    const {cart} = useContext(SetCartData);
    return (
        <div>
            {
                cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b py-2">
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                        <span>${item.price}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;