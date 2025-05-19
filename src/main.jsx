import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import Root from './root.jsx';
import Home from './Components/Home/Home.jsx';

import ErrorPage from './ErrorPage.jsx';  
import Gadget_details from './Components/Gadget_details/Gadget_details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch("gadget_data.json").then(res => res.json()),
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      // {
      //   path: "/gadgets",
      //   element: <Gadgets />,
      //   // loader: () => fetch("gadget_data.json"),
        
      // },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>
      },
      {
        path: "/stats",
        element: <h1>Stats</h1> 
      },
      {
        path: "/gadget/:details",
        element: <Gadget_details />,
        // loader: fetch("gadget_data.json"),
      }
      
    ]
  },    // <HomePage /> is a component
   // <AboutPage /> is a component
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
