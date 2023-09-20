import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // 👈 import from the library
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users';
import UserDetals from './Components/UserDetals/UserDetals';
import Posts from './Components/Posts/Posts';
import ReadMore from './Components/ReadMore/ReadMore';
import Error from './Components/ErrorPage/ErrorPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />,
      },
      {
        path: '/user/:Id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.Id}`),
        element: <UserDetals />,
      },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:Id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`),
        element: <ReadMore></ReadMore>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> {/* 👈 wrap your app with the provider */}
  </React.StrictMode>,
)
