// Crear UserContext.jsx
import React, { Children } from 'react'
import { createContext, useState } from 'react'

//1. crear contexto
export const UserContext = createContext();

// 2. Crear proveedor
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const [email, setEmail] = useState();

    //Metodo logout
    const logout = () => {
        setToken(false);
        setEmail(false)
    };

    const register = async ({email, password}) => {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        
        const data = await response.json();

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);

        setToken(data.token)
        setEmail(data.email)

        console.log(data.token)
    };

    const login = async ({email, password}) => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        
        const data = await response.json();

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);

        setToken(data.token)
        setEmail(data.email)

        console.log(data.token)
    };

    return (
        <UserContext.Provider value={{ token, logout, register, login, email }}>
            {children}
        </UserContext.Provider>
    );
};
