import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Auth } from './Components/Context/AuthContext';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Auth)
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }


    if (user && user.uid) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace  ></Navigate >
    );
};

export default PrivateRoute;