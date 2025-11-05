'use client'
import { createContext, useState } from "react"


export const dataContext = createContext();

export default function DataProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [prod, setProd] = useState([]);

    return (
        <dataContext.Provider value={{ loading, setLoading, isLogedIn, setIsLogedIn, email, setEmail, prod, setProd }}>
            {children}
        </dataContext.Provider>
    )

}