'use client'
import { dataContext } from '@/context/Context';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import LoaderComponent from '../root/LoaderComponent';

export default function Tvs() {

    const [data, setData] = useState([]);
    const { loading, setLoading } = useContext(dataContext);


    useEffect(() => {
        getProds();
    }, [])


    function getProds() {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/tvs`, { category: 'laptops' }).then((res) => {
            setData(res.data);
        });

    }

    if (loading) return <LoaderComponent />

    return (
        <>
            <div className="container w-full flex flex-col md:flex-row items-center">
                <h1 className="text-4xl my-5 font-semibold capitalize ms-10">top deals on Tvs</h1>
                <Link href={'/'} className='text-blue-700 ms-auto md:block hidden me-5 font-bold'>load more</Link>
            </div>

            <div className="container md:columns-2 lg:columns-4 w-full p-5">
                {
                    data.map((d, i) => {
                        if (i < 8) return (
                            <Link onClick={()=>{setLoading(true)}} href={`/product/${d._id}`} key={i} className="container mt-1 flex flex-col items-center justify-center border rounded-xl my-3 w-full p-3 h-96">
                                <img src={d.image} alt="" className="h-4/5  w-auto" />
                                <h2 className="text-md text-center w-11/12 mt-4 font-semibold">{d.name}</h2>
                                <h2 className="text-lg text-center w-10/12 my-3 font-semibold"> ₹{d.price}</h2>
                            </Link>
                        )
                    })
                }
            </div>

            <div className="container w-full flex items-center justify-center">
                <Link href={'/'} className='text-blue-700 w-full md:hidden text-center mx-auto font-bold'>see more</Link>

            </div>
        </>
    )
}
