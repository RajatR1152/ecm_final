'use client'
import Link from 'next/link'
import React from 'react'
import Rating from '../root/Rating'

export default function ListView({ data, category }) {
    return (
        <div className="container mx-auto md:w-8/12 flex flex-col gap-2">

            {
                data?.map((d) => {
                    return (
                        <Link href={`/product/${d._id}`} key={d._id} className="container mt-1 flex  border rounded-xl my-3 w-full p-2 h-fit">

                            <div className="h-full w-4/12">
                                <img src={d.image} alt="" className="h-full w-auto" />
                            </div>


                            <div className="container ms-10 w-8/12 flex flex-col gap-4">

                                <h2 className="text-md w-11/12 mt-4 font-semibold">{d.name}</h2>

                                <Rating hover={true} stars={d.rating} />

                                <div className="container w-full">
                                    <h2 className="text-md w-11/12 mt-4 font-semibold">{d.description[0]}</h2>
                                    <h2 className="text-md w-11/12 mt-4 font-semibold">{d.description[1]}</h2>
                                    <h2 className="text-md w-11/12 mt-4 font-semibold">{d.description[2]}</h2>
                                </div>

                                <div className="container w-full flex gap-3">
                                    <h2 className="text-lg text-red-500 font-semibold"> <s>₹{1000 + parseInt(d.price)}</s></h2>
                                    <h2 className="text-xl font-semibold"> ₹{d.price}</h2>
                                </div>

                            </div>

                        </Link>
                    )
                })
            }

        </div>
    )
}

