import React, { createContext, useContext, useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
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
            // localStorage.removeItem("token");
            localStorage.clear();
            navigate("/login");
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const tokenResult = await user.getIdTokenResult(true);
                    localStorage.setItem("token", tokenResult.token);

                    if (tokenResult.expirationTime < Date.now() / 1000) {
                        throw new Error("Token expirado.");
                    }

                    setAuthenticated(true);
                } catch (error) {
                    console.error(error.message);
                    logout();
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ Authenticated, setAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);

