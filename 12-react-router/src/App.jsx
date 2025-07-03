import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Contact } from './Pages/Contact';
import { Movie } from './Pages/Movie';
import { About } from './Pages/About';
import { Home } from './Pages/Home';

function App() {
  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/movie", 
      element:<Movie/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    }
  ])

  return <RouterProvider router={Router}/>
}

export default App
