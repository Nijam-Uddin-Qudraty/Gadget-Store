import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

const Gadget_details = () => {
    const { details } = useParams();
    // const data = useLoaderData();
    
    return (
        <div>
            <h1>Gadget Details</h1>
            <p>{details}</p>
        </div>
    );
};

export default Gadget_details;