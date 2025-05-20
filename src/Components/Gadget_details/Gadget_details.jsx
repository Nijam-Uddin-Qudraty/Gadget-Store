import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Gadget_details = () => {
  const { details } = useParams();
  const data = useLoaderData();

  const gadget = data.find(item => item.id?.toString() === details);

  if (!gadget) return <p className="text-center text-red-600">Gadget not found</p>;

  // Generate stars manually
  const stars = [];
  const fullStars = Math.floor(gadget.rating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

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
            {stars}
            <span className="text-gray-600">({gadget.rating})</span>
          </div>
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Add To Cart</button>
      </div>
    </div>  
    </>
  );
};

export default Gadget_details;
