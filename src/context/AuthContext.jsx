import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const getAuthenticated = () => localStorage.getItem("authenticated");
    const [Authenticated, setAuthenticated] = useState( getAuthenticated || false);

    const logout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            setAuthenticated(false);
            localStorage.clear();

            console.log("Usuário deslogado com sucesso.");
        } catch (error) {
            console.error("Erro ao deslogar:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ Authenticated, setAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
