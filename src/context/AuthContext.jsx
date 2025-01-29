import React, { createContext, useContext, useState, useEffect } from "react";
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const navigate = useNavigate();
    
    const [Authenticated, setAuthenticated] = useState(false);


    const logout = async () => {
        try {
            await signOut(auth);
            setAuthenticated(false);
            localStorage.clear();
            navigate("/login");
            console.log("Usuário deslogado.");
        } catch (error) {
            console.error("Erro ao deslogar:", error.message);
        }
    };

    useEffect(() => {
        // Ouvinte para verificar se há um usuário autenticado
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    // Obtém o token atualizado
                    const tokenResult = await user.getIdTokenResult(true);
                    
                    // Converte expirationTime para timestamp correto
                    const expirationTime = new Date(tokenResult.expirationTime).getTime();
                    const now = Date.now();

                    if (expirationTime < now) {
                        throw new Error("Token expirado.");
                    }

                    console.log("Token válido. Usuário continua logado.");
                    localStorage.setItem("token", tokenResult.token);
                    setAuthenticated(true);
                } catch (error) {
                    console.error("Token inválido ou expirado:", error.message);
                    logout();
                }
            } else {
                console.log("Nenhum usuário autenticado.");
                setAuthenticated(false);
            }
        });

        return () => unsubscribe(); // Remove o listener quando o componente desmontar
    }, []);

    return (
        <AuthContext.Provider value={{ Authenticated, setAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);

