import React from 'react';

const Gadget = ({ gadget }) => {
    const altText = `${gadget.product_title} image`;
    return (
        
            <div className="card min-w-80 bg-base-100 shadow-xl ">
                <figure><img className='h-46' src={gadget.product_image} alt={altText} /></figure>
                <div className="card-body text-center grid justify-items-center md:justify-items-normal md:text-left ">
                    <h2 className="card-title text-2xl">{gadget.product_title}</h2>
                    <p className='text-xl'>Price:{gadget.price}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">View Detail</button>
                    </div>
                </div>
        </div>
    );
};

export default Gadget;