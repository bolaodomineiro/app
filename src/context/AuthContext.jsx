import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const getAuthenticated = () => localStorage.getItem("authenticated");
    const [Authenticated, setAuthenticated] = useState(getAuthenticated);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setAuthenticated(currentUser); // Usuário autenticado
            } else {
                setAuthenticated(null); // Nenhum usuário logado
            }
        });

        return () => unsubscribe(); // Limpa o listener ao desmontar o componente
    }, []);


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
