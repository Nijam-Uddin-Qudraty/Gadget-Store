import React from 'react';
import banner from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <>
            <div className="text-center space-y-6 mt-12 bg-primary rounded-2xl p-52">
            <h1 className="font-bold text-5xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            <button className="btn rounded-4xl py-4 px-7 ">Shop Now</button>
            
        </div>
            <img src={banner} alt="" className="rounded-2xl mt-8" />
        </>
    );
};

export default Banner;