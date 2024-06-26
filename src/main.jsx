import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

  import Root from './Pages/Root/Root';
import DetailsPage from './Pages/DetailsPage/DetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      
        {
          path: "/",
          element:<Home></Home>,
  
        },

        {
          path: "/details/:id",
          element:<DetailsPage></DetailsPage>,
          loader: () => fetch('/game.json'),
  
        },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
