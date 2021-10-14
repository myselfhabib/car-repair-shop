import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>please login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-success">Please Login</button>
        </div>
    );
};

export default Login;