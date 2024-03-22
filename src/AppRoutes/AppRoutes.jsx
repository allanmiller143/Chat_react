import React from 'react';
import { BrowserRouter as Router, createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ChatPage from '../Pages/ChatPage/ChatPage';
import PrivateRoute from './PrivateRoute';

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
  ];

  const router = createBrowserRouter([
    ...notAuthenticatedRoutes,
    ...PrivateRoutes
  ]);

  



  return <RouterProvider router={router} />;
};

export default AppRoutes;
