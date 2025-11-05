'use client'
import LoaderComponent from '@/components/root/LoaderComponent';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { toast } from 'react-toastify';


export default function page() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        confirm: ''
    })


    const { loading, setLoading } = useContext(dataContext);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    const [type, setType] = useState('password');

    let n;
    let v;

    function handle(e) {

        n = e.target.name;
        v = e.target.value;

        setUser({ ...user, [n]: v });

    }

    function validate() {

        if (user.username.length > 2 && user.password.length > 8 && user.email.length > 4) {
            if (user.confirm == user.password) {
                return true;
            }
            else {
                toast.error('password and confirm password doesnt match')
            }
        }
        else {
            toast.error('all fields are requred');
        }


    }

    function submit(e) {

        e.preventDefault();

        console.log(user);

        if (validate()) {
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, { data: user }).then((res) => {
                if (res.data.code === 200) {
                    toast.success(res.data.message);
                }
                else {
                    toast.error(res.data.message);
                }
            })
        }

    }

    if (loading) {
        return <LoaderComponent />
    }



    return (
        <div>
            <div className="container w-full h-screen flex p-5 items-center justify-center">

                <form className="container md:w-3/12 p-5 flex flex-col gap-5 rounded-xl bg-black text-white">

                    <h1 className="text-3xl font-semibold capitalize text-center">sign up</h1>

                    <input required name='username' value={user.username} onChange={handle} type="text" placeholder='username...' className="p-2 text-black w-full border-b-2 bg-white rounded-lg focus:outline-none mt-10" />

                    <input required name='email' value={user.email} onChange={handle} type="email" placeholder='email...' className="p-2 text-black w-full border-b-2 bg-white rounded-lg focus:outline-none" />


                    <div className="container w-full flex p-0 text-black items-center justify-center bg-white rounded-lg">
                        <input required name='password' value={user.password} onChange={handle} type={type} placeholder='password...' className="p-2 text-black w-full focus:outline-none" />
                        {
                            type == 'text' ?
                                <FiEyeOff onClick={() => { setType('password') }} className='cursor-pointer mx-2' size={20} />
                                :
                                <FiEye onClick={() => { setType('text') }} className='cursor-pointer mx-2' size={20} />
                        }
                    </div>

                    <input required name='confirm' value={user.confirm} onChange={handle} type="text" placeholder='confirm password...' className="p-2 text-black w-full border-b-2 bg-white rounded-lg focus:outline-none" />

                    <div className="cotainer flex w-full p-1 gap-4 items-center text-xs">
                        <input required type="checkbox" name="rm" id="" className='p-1' /> by clicking you will aceept all the terms and conditions.
                    </div>

                    <button onClick={submit} className="w-full p-2 rounded-xl bg-black hover:bg-white hover:text-black cursor-pointer border-2 text-lg font-semibold border-white"> sign up</button>

                    <div className="container w-full flex items-center justify-center gap-4 p-3">
                        <p className="text-md font-semibold">already have account ? </p>
                        <Link className="text-md text-blue-700 font-semibold" href={'/auth/login'}>login</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}
