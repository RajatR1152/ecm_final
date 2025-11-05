'use client'
import { dataContext } from '@/context/Context'
import React, { useContext, useEffect } from 'react'

export default function LocalVars() {

    const { isLogedIn, setIsLogedIn, email, setEmail } = useContext(dataContext);


    useEffect(() => {
        let user = localStorage.getItem('u');
        setEmail(user);
        if (user?.length > 3) {
            setIsLogedIn(true);
        }
        else {
            setIsLogedIn(false);
        }
    }, [])

    return (
        <div></div>
    )
}
