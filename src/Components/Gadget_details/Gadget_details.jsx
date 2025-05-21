import React, { useContext } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { SetCartData } from "../../Root";
import { FaStar } from 'react-icons/fa';
const Gadget_details = () => {
  const { details } = useParams();
  const data = useLoaderData();

  const gadget = data.find(item => item.id?.toString() === details);

  const { cart, setCart, wishlist, setWishlist } = useContext(SetCartData);
  if (!gadget) return <p className="text-center text-red-600">Gadget not found</p>;



  return (
    <>
      {/* detal page info */}
      <div className='w-full h-[463px] bg-primary text-white p-6 text-center'>
        <h1 className='text-3xl font-bold'>Product Details</h1>
        <p> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
       {/* Gadget details component */}
       <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <img src={gadget.image} alt={gadget.title} className="w-full h-auto rounded" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-2xl font-bold">{gadget.title}</h1>
        <p className="text-lg font-semibold text-gray-700">Price: ${gadget.price}</p>

        <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${gadget.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {gadget.availability ? 'In Stock' : 'Out of Stock'}
        </span>

        <p className="text-gray-600">{gadget.description}</p>

        <div>
          <h3 className="font-semibold">Specification:</h3>
          <ul className="list-decimal    pl-6 text-gray-700">
            {gadget.specification.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Rating:</span>
          <div className="flex items-center gap-1">
    {Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={i < Math.round(gadget.rating) ? "text-yellow-400" : "text-gray-300"}
      />
    ))}
    <span className="text-gray-600">({gadget.rating})</span>
  </div>
        </div>

            <Link to="/dashboard/cart">
              <button onClick={() => setCart([...cart, gadget])} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Add To Cart</button>
            </Link>
          <Link to="/dashboard/wishlist">
            <button onClick={() => setWishlist([...wishlist, gadget])} className="btn rounded-full"><IoIosHeartEmpty></IoIosHeartEmpty> </button>
          </Link>
      </div>
    </div>  
    </>
  );
};

export default Gadget_details;
