import React, { useContext } from 'react'
import Navs from './Navs'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { dataContext } from '@/context/Context';
import LoaderComponent from '../root/LoaderComponent';
import LocalVars from '../root/LocalVars';
import ProfileNav from '../profile/ProfileNav';

export default function Header({ show, setShow }) {

    const { loading, setLoading, isLogedIn, setIsLogedIn } = useContext(dataContext);


    if (loading) {
        return <LoaderComponent />
    }


    return (
        <div className="container w-full p-3">

            <div className="container fixed z-20 w-[95%] md:w-[97%] rounded-xl bg-black text-white p-5 md:px-5 lg:px-8 py-5 flex items-center md:justify-center">

                {show ? <RxCross2 onClick={() => { setShow(false) }} className='md:hidden me-4 cursor-pointer' size={22} /> : <CiMenuFries onClick={() => { setShow(true) }} size={22} className='md:hidden me-4 cursor-pointer' />}

                <Link href={'/'} >
                    <img src="https://www.nicepng.com/png/full/143-1432650_rr-logo-hd-png.png" alt="" className="w-auto h-6 md:h-8 cursor-pointer" />
                </Link>

                <div className="container hidden md:block">
                    <Navs />
                </div>

                <div className="container w-fit hidden lg:ms-auto md:flex lg:gap-2">
                    {
                        isLogedIn ? <ProfileNav />
                            : <>
                                <Link onClick={() => { setLoading(true) }} href={'/auth/login'} className="bg-transparent w-fit text-md text-gray-200 hover:bg-[#444444] cursor-pointer rounded-lg mx-3 md:py-2 md:px-5">login</Link>
                                <Link onClick={() => { setLoading(true) }} href={'/auth/register'} className="bg-transparent w-fit text-md text-gray-200 hover:bg-[#444444] cursor-pointer rounded-lg mx-3 md:py-2 md:px-5">signup</Link>
                            </>
                    }
                </div>

            </div>

            <LocalVars />

        </div>
    )
}


