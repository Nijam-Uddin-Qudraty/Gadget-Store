import React, { useContext } from 'react';

import Gadget from './Gadget';
import { apiContext } from '../../Root';
import Sidebar from './Sidebar';
const Gadgets = () => {
    // const [gadgets, setGadgets] = useState([]);
    // const gadgets = useLoaderData();
    const gadgets = useContext(apiContext);
    console.log(gadgets);
    return (
        <div className='flex-row gap-2 md:flex py-4'>
            <Sidebar></Sidebar>
            <div className=''>
                <h1 className="font-semibold text-4xl">Explore Cutting-Edge Gadgets</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-auto '>
                {
                gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
            }
            </div>
            </div>
        </div>
    );
};

export default Gadgets;