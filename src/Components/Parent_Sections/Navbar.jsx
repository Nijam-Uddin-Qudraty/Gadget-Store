import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink} from 'react-router';
const Navbar = () => {
  const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/stats">Statistics</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>

  </>
  // const location = useLocation();
  // console.log( location.pathname);
    return (
        <div className="navbar max-w-5/6 mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <NavLink to={"/"} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-full"><IoCartOutline></IoCartOutline> </a>
    <a className="btn rounded-full"><IoIosHeartEmpty></IoIosHeartEmpty> </a>
  </div>
</div>
    );
};

export default Navbar;