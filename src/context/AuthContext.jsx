import React, { createContext, useContext, useState } from 'react'; // importando  o react context

const AuthContext = createContext(); // criando o context

export const AuthProvider = ({ children }) => { // exportando a funçao que farar o provider , passando como paramentro children

    const [Authenticated, setAuthenticated] = useState(false);// trocar valor pelo token de autenticação


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

