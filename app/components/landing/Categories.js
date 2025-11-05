'use client'
import React from 'react'
import cats from '@/components/assets/categories.json'
import Link from 'next/link'

export default function Categories() {
    return (

        <div className="container w-full h-fit md:p-5">

            <div className="container w-full py-5 md:p-5 bg-black rounded-xl text-white">

                <h1 className="text-3xl font-semibold ms-10 my-10 text-white">Browse More Categories</h1>

                <div className="container md:columns-2 lg:columns-3 w-full p-5">
                    {
                        cats.map((d, i) => {
                            return (
                                <Link href={`/categories/${d?.category}`} key={i} className="container mt-1 flex flex-col items-center justify-center border rounded-xl my-3 w-full p-3 h-96">
                                    <img src={d.image} alt="" className="h-3/5 w-auto" />
                                    <h2 className="text-lg text-center w-11/12 mt-4 font-semibold capitalize ">{d?.category}</h2>
                                    <h2 className="text-xs text-center text-[#444444] w-10/12 my-3 font-semibold"> {d?.description}</h2>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}
