import React, { useContext } from 'react';
import { SetCartData } from '../../Root';
import { SlEqualizer } from "react-icons/sl";
import { IoCloseCircleOutline } from "react-icons/io5";
const Cart = () => {
    const {cart} = useContext(SetCartData);
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
                cart.map(item => (
                    <div key={item.id} className="items-center  py-2 flex flex-col md:flex-row lg:flex-row gap-4">
                        <img src={item.image} alt={item.title} className="w-50  rounded" />
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-bold flex justify-between'>{item.title} <IoCloseCircleOutline className='text-red-600 text-2xl cursor-pointer' /></h1>
                           
                        <p>{item.description}</p>
                        <p className='font-bold'>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default Cart;