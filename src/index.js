import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import Home from './router/pages/home';
import About from './router/pages/about';
import Contact from './router/pages/contact';
import ErrorPage from './router/errorpage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/a",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

