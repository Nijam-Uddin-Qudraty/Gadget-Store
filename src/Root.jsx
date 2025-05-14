import { Outlet } from 'react-router';
import Navbar from './Components/Header/Navbar.jsx';
import React from 'react';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Root;