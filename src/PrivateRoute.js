import React from 'react';
import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectAuthState } from './redux/features/auth/authSlice';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector(selectAuthState);
    let location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRoute;