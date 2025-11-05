'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function HomeApp() {

    const [data, setData] = useState([]);



    useEffect(() => {
        getProds();
    }, [])


    function getProds() {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/homeapp`, { category: 'laptops' }).then((res) => {
            setData(res.data);
        });

    }

    console.log(data)

    return (
        <>
            <h1 className="text-4xl my-5 font-semibold capitalize ms-10">top deals on laptops</h1>

            <div className="container md:columns-2 lg:columns-4 w-full p-5">
                {
                    data.map((d, i) => {
                        if (i < 8) return (
                            <Link href={`/product/${d._id}`} className="container mt-1 flex flex-col items-center justify-center border rounded-xl my-3 w-full p-3 h-96">
                                <img src={d.image} alt="" className="h-3/5 w-auto" />
                                <h2 className="text-md text-center w-11/12 mt-4 font-semibold">{d.name}</h2>
                                <h2 className="text-lg text-center w-10/12 my-3 font-semibold"> ₹{d.price}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
