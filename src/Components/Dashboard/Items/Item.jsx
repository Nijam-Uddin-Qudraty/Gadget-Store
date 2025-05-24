import React, { useContext } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { deleteContext } from '../../../Root';

const Item = ({ gadgets, name }) => {
    const handleDelete = useContext(deleteContext)
    return (
        <div>
            {gadgets.map(item => (
                <div key={item.id} className="items-center  py-2 flex flex-col md:flex-row lg:flex-row gap-4">
                    <img src={item.image} alt={item.title} className="w-50  rounded" />
                    <div className='flex flex-col gap-4'>
                        <h1 onClick={() => handleDelete(item, name)} className='font-bold flex justify-between'>{item.title} <IoCloseCircleOutline className='text-red-600 text-2xl cursor-pointer' /></h1>
                        <p>{item.description}</p>
                        <p className='font-bold'>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Item;