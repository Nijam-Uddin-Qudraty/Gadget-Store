import React from 'react';
import { SiDbeaver } from 'react-icons/si';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';

const Gadget_Section = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Gadget_Section;