import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');

    return (
        <>
            <div className='w-full h-[344px] bg-purple-600 text-white p-6 text-center'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-lg'>
                    Welcome to the dashboard! Here you can manage your gadgets.
                </p>

                {/* Tabs */}
                <div className="tabs justify-center mt-4 gap-2">
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`btn rounded-4xl px-16 ${
                            activeTab === 'cart'
                                ? 'bg-white text-purple-600'
                                : 'btn-outline text-white'
                        }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setActiveTab('wishlist')}
                        className={`btn rounded-4xl px-16 ${
                            activeTab === 'wishlist'
                                ? 'bg-white text-purple-600'
                                : 'btn-outline text-white'
                        }`}
                    >
                        Wishlist
                    </button>
                </div>

                {/* Tab content */}
                <div className="mt-6 text-white">
                    {activeTab === 'cart' && <p>This is your Cart content.</p>}
                    {activeTab === 'wishlist' && <p>This is your Wishlist content.</p>}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
