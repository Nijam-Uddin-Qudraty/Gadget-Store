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
    const onClickAdd = (gadget,btnName) => {
      const exist = cart.find((item) => item.id === gadget.id);
      const existWishlist = wishlist.find((item) => item.id === gadget.id);
      if (btnName === "cart") {
        if (existWishlist) { 
            const newWishlist = wishlist.filter((item) => item.id !== gadget.id);
            setWishlist([...newWishlist]);
          }
        if (exist) {
          alert("Already in Cart");
        }
        else {
          setCart((prev) => [...prev, gadget]);
          alert("Added to Cart");
          }
      }
      else {
        if (exist) {
          alert("Already in Cart");
        }
        else {
                  if (existWishlist) {
                alert("Already in Wishlist");
              }
              else {
                setWishlist((prev) => [...prev, gadget]);
                alert("Added to Wishlist");
              }
        }
        
      }

      if (exist && existWishlist) {
        wishlist.filter((item) => item.id !== gadget.id);
      }
      // adding item to cart
     
      // adding item to wishlist
      
    };
    return (
      <div>
        <apiContext.Provider value={data}>
          <SetCartData.Provider value={{ cart, wishlist, onClickAdd }}>
            <Navbar />
            <Outlet />
            <Footer />
          </SetCartData.Provider>
          </apiContext.Provider>
      </div>
    );
  };

  export default Root;