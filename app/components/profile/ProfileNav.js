'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'

export default function ProfileNav() {

    let options = ["setting", "profile", "more", "xyz", "abc"];
    const [show, setShow] = useState(false);

    return (
        <div className="container flex items-center flex-col ">

            <CiUser onMouseLeave={() => { setShow(false) }} onMouseOver={() => { setShow(true) }} size={22} className='me-10 cursor-pointer' />
            {
                show ?

                    <div onMouseOver={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }} className=" absolute">
                        <div className="container w-full h-7 bg-transparent mt-6"></div>
                        <div className="container w-fit px-16 text-start capitalize rounded-lg flex flex-col p-5 bg-[#1A1919]">
                            {
                                options.map((o, i) => {
                                    return (
                                        <Link className='text-md font-semibold leading-8' key={i} href={'/profile'}>{o}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}



