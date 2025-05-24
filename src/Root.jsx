  import Navbar from './Components/Parent_Sections/Navbar.jsx';
  import Footer from './Components/Parent_Sections/Footer.jsx';
  import { createContext,   useState } from 'react';
  import { Outlet, useLoaderData } from 'react-router';
  export const SetCartData = createContext();
export const apiContext = createContext();
  export const deleteContext = createContext();
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
    const onDelete = (gadget,name) => {
     if (name === "cart" && cart.length > 0) {
        const newCart = cart.filter((item) => item.id !== gadget.id);
        setCart([...newCart]);
        alert("Removed from Cart");
      }
      else if (name === "wishlist" && wishlist.length > 0) {
        const newWishlist = wishlist.filter((item) => item.id !== gadget.id);
        setWishlist([...newWishlist]);
        alert("Removed from Wishlist");
      }
      else {
        alert("No items to delete");
      }
    };
    return (
      <div>
        <apiContext.Provider value={data}>
          <SetCartData.Provider value={{ cart, wishlist, onClickAdd }}>
          <deleteContext.Provider value={onDelete}>
            <Navbar />
            <Outlet />
            <Footer />
          </deleteContext.Provider>
          </SetCartData.Provider>
          </apiContext.Provider>
      </div>
    );
  };

  export default Root;