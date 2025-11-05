'use client'
import LoaderComponent from '@/components/root/LoaderComponent';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { toast } from 'react-toastify';


export default function page() {
    const router = useRouter();
    const {loading,setLoading} = useContext(dataContext);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [type, setType] = useState('password');

    let n;
    let v;

    function handle(e) {

        n = e.target.name;
        v = e.target.value;

        setUser({ ...user, [n]: v });

    }

    function submit() {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, { data: user }).then((res) => {
            if (res.data.code == 200) {
                toast.success(res.data.message);
                localStorage.setItem("u", user.email);
                router.push('/');
                setLoading(true);
            }
            else {
                toast.error(res.data.message);
            }
        })
    }


    setTimeout(() => {
        setLoading(false);
    }, 1500);

    if (loading) {
        return <LoaderComponent />
    }

    return (
        <div>
            <div className="container w-full h-screen flex p-5 items-center justify-center">

                <div className="container md:w-3/12 p-5 flex flex-col gap-5 rounded-xl bg-black text-white">

                    <h1 className="text-3xl font-semibold capitalize text-center">log in</h1>

                    <input name='email' value={user.email} onChange={handle} type="text" placeholder='email...' className="p-2 text-black w-full border-b-2 bg-white rounded-lg focus:outline-none mt-10" />


                    <div className="container w-full flex p-0 text-black items-center justify-center bg-white rounded-lg">
                        <input name='password' value={user.password} onChange={handle} type={type} placeholder='password...' className="p-2 text-black w-full focus:outline-none" />
                        {
                            type == 'text' ?
                                <FiEyeOff onClick={() => { setType('password') }} className='cursor-pointer mx-2' size={20} />
                                :
                                <FiEye onClick={() => { setType('text') }} className='cursor-pointer mx-2' size={20} />
                        }
                    </div>

                    <div className="cotainer flex w-full p-1 gap-4 items-center">
                        <input type="checkbox" name="rm" id="" className='p-1' /> remember me
                    </div>

                    <button onClick={submit} className="w-full p-2 rounded-xl bg-black hover:bg-white hover:text-black cursor-pointer border-2 text-lg font-semibold border-white"> sign in</button>

                    <div className="container w-full flex items-center justify-center gap-4 p-3">
                        <p className="text-md font-semibold">don't have account ? </p>
                        <Link className="text-md text-blue-700 font-semibold" href={'/auth/register'}>register</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
