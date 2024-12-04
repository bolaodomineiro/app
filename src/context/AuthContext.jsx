import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(true);

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

