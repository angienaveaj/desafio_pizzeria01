// Crear UserContext.jsx
import React, { Children } from 'react'
import { createContext, useState } from 'react'

//1. crear contexto
export const UserContext = createContext();

// 2. Crear proveedor
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);

    //Metodo logout
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};
