import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import Layout from './layout/Layout';
import Error from './pages/Error';
import Body from './pages/Body';
import { Contact } from './pages/Contact';
import { RestrauntMenu } from './pages/RestrauntMenu';
import Shimmer from "./pages/Shimmer";
import store from "./redux/store";

const Instamart = lazy(() => import('./pages/Instamart'))
const About = lazy(() => import('./pages/About'))

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
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
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        )
      },
    ]
  }
])


