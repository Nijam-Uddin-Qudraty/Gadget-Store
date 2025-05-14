import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, useRouteError } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import Root from './root.jsx';
import Home from './Components/Home/Home.jsx';
import Gadgets from './Components/Gadget/Gadgets.jsx';
import Gadget_Section from './Components/Gadget/Gadget_Section.jsx';
const ErroPage = () => { 
  const error = useRouteError();
  console.log(error);
  return <>
      <h1></h1>
  </>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/gadget_section",
            element: <Gadget_Section />,
            children:[
              {
                path: "gadgets",
                element: <Gadgets />
              }]
          }]
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>
      },
      {
        path: "/stats",
        element: <h1>Stats</h1> 
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
