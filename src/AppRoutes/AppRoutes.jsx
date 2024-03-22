import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ChatPage from '../Pages/ChatPage/ChatPage';
import PrivateRoute from './PrivateRoute';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

const AppRoutes = () => {
  const PrivateRoutes = [
    {
      path: "/",
      element: <PrivateRoute/>,
      children: [
        {
          path: "/chatPage/:id",
          element: <ChatPage/>
        }
      ]
    }
  ];

  const notAuthenticatedRoutes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
  },
  ];

  const router = createBrowserRouter([
    ...notAuthenticatedRoutes,
    ...PrivateRoutes
  ]);

  



  return <RouterProvider router={router} />;
};

export default AppRoutes;
