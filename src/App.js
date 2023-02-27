import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import About from './pages/About';
import Error from './pages/Error';
import Body from './pages/Body';
import { Contact } from './pages/Contact';
import { RestrauntMenu } from './pages/RestrauntMenu';

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />
      },
    ]
  }
])


