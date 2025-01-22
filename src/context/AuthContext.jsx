import React, { createContext, useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [Authenticated, setAuthenticated] = useState(false);

    const logout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            setAuthenticated(false);
            localStorage.removeItem("token");
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
