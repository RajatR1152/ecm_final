'use client'
import { dataContext } from '@/context/Context';
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Navs() {

    let categories = ['electronics', 'clothing', 'shoes', 'mobiles', 'laptops', 'earphones', 'watches'];

    let wwd = ['shipping', 'FBA', 'transport', 'stores'];

    let help = ['contact us'];

    let about = ['contact us'];

    const { email, setLoading } = useContext(dataContext);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);


    return (
        <div className="container text-white mt-16 md:mt-0 w-10/12 md:h-fit h-[600px] md:bg-transparent rounded-e-lg bg-[#030711] md:w-fit flex md:flex-row flex-col gap-5 md:gap-4 lg:gap-6 items-center justify-center capitalize md:ms-7 lg:mx-auto">
            <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold text-gray-300' href={'/shops'}>shop</Link>
            <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center' href={'/'}>offer <span className='text-xs font-semibold text-gray-300 bg-[#2c2c2c] p-1 w-fit rounded-lg text-center flex items-center justify-center'>12% off</span> </Link>

            <div className="container w-fit">

                <button className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center text-center' href={'/'}>categories {show && target == "categories" ? <FaAngleUp className='cursor-pointer' onClick={() => { setShow(false); setTarget(null) }} size={15} /> : <FaAngleDown className='cursor-pointer' onClick={() => { setShow(true); setTarget('categories') }} size={15} />}</button>
                {
                    show && target == "categories" &&
                    <div className="containe w-52 h-fit p-4 rounded-md absolute bg-[#2c2c2c] flex flex-col mt-4">
                        {
                            categories.map((c, i) => {
                                return (
                                    <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold hover:bg-[#444444] p-3 rounded-lg' key={i} href={`/categories/${c == '' ? '' : c}`}>{c}</Link>
                                )
                            })
                        }
                    </div>
                }
            </div>

            {email ? <>
                <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center' href={'/cart'}>cart </Link>
                <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center' href={'/orders'}>orders </Link>
            </> : null}
            <div className="container w-fit">

                <button className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center text-center' href={'/'}>about {show && target == "about" ? <FaAngleUp className='cursor-pointer' onClick={() => { setShow(false); setTarget(null) }} size={15} /> : <FaAngleDown className='cursor-pointer' onClick={() => { setShow(true); setTarget('about') }} size={15} />}</button>
                {
                    show && target == "about" &&
                    <div className="containe w-52 h-fit p-4 rounded-md absolute bg-[#2c2c2c] flex flex-col mt-4">
                        {
                            about.map((c, i) => {
                                return (
                                    <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold hover:bg-[#444444] p-3 rounded-lg' key={i} href={`/`}>{c}</Link>
                                )
                            })
                        }
                    </div>
                }
            </div>

            <div className="container w-fit">

                <button className='text-sm font-semibold text-gray-300 flex gap-1 items-center justify-center text-center' href={'/'}>help {show && target == "help" ? <FaAngleUp className='cursor-pointer' onClick={() => { setShow(false); setTarget(null) }} size={15} /> : <FaAngleDown className='cursor-pointer' onClick={() => { setShow(true); setTarget('about') }} size={15} />}</button>
                {
                    show && target == "help" &&
                    <div className="containe w-52 h-fit p-4 rounded-md absolute bg-[#2c2c2c] flex flex-col mt-4">
                        {
                            help.map((c, i) => {
                                return (
                                    <Link onClick={() => { setLoading(true) }} className='text-sm font-semibold hover:bg-[#444444] p-3 rounded-lg' key={i} href={`/`}>{c}</Link>
                                )
                            })
                        }
                    </div>
                }
            </div>

            <div className="container flex flex-col w-fit gap-5 lg:ms-auto md:hidden">
                <Link onClick={() => { setLoading(true) }} href={'/auth/login'} className="bg-transparent w-fit text-md text-gray-200 hover:bg-[#444444] cursor-pointer rounded-lg mx-3 md:py-2 md:px-5">login</Link>
                <Link onClick={() => { setLoading(true) }} href={'/auth/register'} className="bg-transparent w-fit text-md text-gray-200 hover:bg-[#444444] cursor-pointer rounded-lg mx-3 md:py-2 md:px-5">signup</Link>
            </div>

        </div>
    )
}
