import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from "../Services/Firebase";

const PrivateRoute = () => {
    const user = auth.currentUser;
    return user ? <Outlet /> : <Navigate to="/"/>    
}

export default PrivateRoute;


