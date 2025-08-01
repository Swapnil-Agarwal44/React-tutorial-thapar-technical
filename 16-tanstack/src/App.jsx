import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from './Pages/Layout';
import { Home } from './Pages/Home';
import { Fetchold } from './Pages/Fetchold';
import { FetchRQ } from './Pages/FetchRQ';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'



 const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/trad",
          element: <Fetchold />,
        },
        {
          path: "/rq",
          element: <FetchRQ/>,
        }
      ],
    },
  ]);



  function App() {
  
    const queryClient = new QueryClient();
  return(
    <QueryClientProvider client = {queryClient}>
       <RouterProvider router={Router} />
    </QueryClientProvider>
   ) 
}

export default App
