import { Outlet, useLoaderData } from 'react-router';
import Navbar from './Components/Header/Navbar.jsx';
import { createContext, useContext } from 'react';
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
      </apiContext.Provider>
    </div>
  );
};

export default Root;