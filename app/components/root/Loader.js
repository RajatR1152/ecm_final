import React from 'react'

export default function Loader() {
    return (

        <div className="flex gap-5 items-center justify-center min-h-screen">
            <div className="container w-5 h-5 bg-black rounded-full animate-bounce"></div>
            <div className="container w-5 h-5 bg-black rounded-full animate-bounce"></div>
            <div className="container w-5 h-5 bg-black rounded-full animate-bounce"></div>
            <div className="container w-5 h-5 bg-black rounded-full animate-bounce"></div>
            <div className="container w-5 h-5 bg-black rounded-full animate-bounce"></div>
        </div>

    )
}
