'use client'
import Link from 'next/link';
import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";

export default function BackPath(collection) {

    console.log("sl", collection);

    return (
        <Link href={'/'} className="container flex items-center gap-3 text-black hover:text-gray-400 my-5 cursor-pointer w-full">
            <FaAnglesLeft /> home
            <FaAnglesLeft /> {collection.collection}
            <FaAnglesLeft /> **
        </Link>
    )
}
