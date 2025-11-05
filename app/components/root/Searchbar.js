'use client'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
    return (
        <div className="container w-3/12 rounded-xl mx-auto bg-slate-50 flex shadow-xl">
            <input type="text" placeholder='search...' className="p-2 text-gray-400 bg-transparent focus:outline-none w-full" />
            <button className="px-2 w-fit bg-transparent border-0 cursor-pointer"><FaSearch /></button>
        </div>
    )
}
