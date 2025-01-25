import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../config/firebase.config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const getAuthenticated = () => localStorage.getItem("authenticated");
    const [Authenticated, setAuthenticated] = useState( getAuthenticated || false);

    useEffect(() => {
        const configurePersistence = async () => {
            try {
                await setPersistence(auth, browserLocalPersistence);
                console.log("Persistência configurada!");
                await auth.setPersistence(browserLocalPersistence, {
                    domain: ".bolaodomineiro.com.br/", // Domínio compartilhado entre os subdomínios
                    secure: true,
                });
            } catch (error) {
            console.error("Erro ao configurar persistência:", error);
            }
        };

        configurePersistence();
    }, [auth]);

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
