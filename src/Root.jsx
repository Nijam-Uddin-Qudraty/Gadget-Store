  import Navbar from './Components/Parent_Sections/Navbar.jsx';
  import Footer from './Components/Parent_Sections/Footer.jsx';
  import { createContext,   useState } from 'react';
  import { Outlet, useLoaderData } from 'react-router';
  export const SetCartData = createContext();
  export const apiContext = createContext();
  const Root = () => {
    ;
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const data = useLoaderData();
  
    return (
      <div>
        <apiContext.Provider value={data}>
        <SetCartData.Provider value={{ cart, setCart, wishlist, setWishlist }}>
        <Navbar />
        <Outlet />
        <Footer />
          </SetCartData.Provider>
          </apiContext.Provider>
      </div>
    );
  };

  export default Root;