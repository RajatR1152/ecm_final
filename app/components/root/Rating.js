'use client'
import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";



export default function Rating({ stars, hover }) {

    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <div className={`p-1 ${hover ? 'bg-black text-white' : 'bg-[#DBEE00]'} rounded-md`} key={index}>
                {
                    stars >= index + 1 ? (
                        <MdOutlineStar size={10} />
                    ) : stars >= number ? (
                        <MdOutlineStarHalf size={10} />
                    ) : (<MdOutlineStarOutline size={10} />)
                }
            </div>
        )
    })

    return (
        <div className='flex gap-1 items-center flex-row'>
            {rating}
        </div>
    )
}