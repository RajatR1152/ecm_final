'use client';
import Link from 'next/link';
import React from 'react';

export default function GridView({ data, category }) {
    const filteredData = category === 'mobiles' ? data.slice(0, 20) : category=='watches' ? data.slice(0,120) : data.slice(0, 155);

    return (
        <div className="container w-full p-5 columns-1 md:columns-5">
            {filteredData.map((d) => (
                <Link href={`/product/${d._id}`} key={d._id} className="container mt-1 flex flex-col items-center justify-center border rounded-xl my-3 w-full p-3 h-96">
                    <img src={d.image} alt={d.name} className="h-3/5 w-auto" />
                    <h2 className="text-md text-center w-11/12 mt-4 font-semibold">{d.name}</h2>
                    <h2 className="text-lg text-center w-10/12 my-3 font-semibold"> ₹{d.price}</h2>
                </Link>
            ))}
        </div>
    );
}
