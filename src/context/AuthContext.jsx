import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const stogeAuthenticated = localStorage.getItem('token');
    const [Authenticated, setAuthenticated] = useState(false || stogeAuthenticated);

    return ( // usando e retornando o Appcontext.provider e passando o children, passando valores como props  pelo value 
        <AuthContext.Provider value={{
            setAuthenticated,
            Authenticated
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

