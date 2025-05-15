import { Outlet, useLoaderData } from 'react-router';
import Navbar from './Components/Parent_Sections/Navbar.jsx';
import { createContext } from 'react';
import Footer from './Components/Parent_Sections/Footer.jsx';
// import React, { createContext, useEffect, useState } from 'react';
export  const apiContext = createContext("data");

const Root = () => {
  // const [gadgets, setGadgets] = useState([]);
  
  const data = useLoaderData();
  return (
    <div>
     <apiContext.Provider value={data}>
      <Navbar/>
        <Outlet />
      <Footer/>
      </apiContext.Provider>
    </div>
  );
};

export default Root;