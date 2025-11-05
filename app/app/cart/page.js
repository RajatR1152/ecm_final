'use client'
import Header from '@/components/header&footer/Header';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState([]);
    const { email } = useContext(dataContext);

    async function getUser(e) {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getuser`, { email: e });
            setData(res.data.cart);
        } catch (err) {
            console.error('Error fetching user:', err);
        }
    }

    useEffect(() => {
        if (email) getUser(email);
    }, [email,remove]);

    function filterPrice(p) {
        if (!p) return 0;
        return parseFloat(p.replace(/,/g, '')) || 0;
    }

    function remove(d) {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/cartremove`, { data: d,email:email }).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div className="w-full min-h-screen bg-gray-50">
            <Header />

            <div className="container mx-auto p-4 mt-20">
                <div className="overflow-x-auto shadow-md rounded-lg bg-white">
                    <table className="min-w-max w-full text-sm md:text-base text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-900 uppercase text-xs md:text-sm sticky top-0 z-10">
                            <tr>
                                <th className="py-4 px-2 md:px-4">#</th>
                                <th className="py-4 px-2 md:px-4">Image</th>
                                <th className="py-4 px-2 md:px-4">Name</th>
                                <th className="py-4 px-2 md:px-4">Price / Unit</th>
                                <th className="py-4 px-2 md:px-4">Qty</th>
                                <th className="py-4 px-2 md:px-4">Total</th>
                                <th className="py-4 px-2 md:px-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.length > 0 ? (
                                data.map((d, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-50 transition">
                                        <td className="py-3 px-2 md:px-4">{i + 1}</td>
                                        <td className="py-3 px-2 md:px-4">
                                            <img
                                                src={d?.image}
                                                alt={d?.name}
                                                className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="py-3 px-2 md:px-4 font-medium">{d?.name}</td>
                                        <td className="py-3 px-2 md:px-4">
                                            ₹{(filterPrice(d?.price) / parseFloat(d?.quantity || 1)).toFixed(2)}
                                        </td>
                                        <td className="py-3 px-2 md:px-4">{d?.quantity}</td>
                                        <td className="py-3 px-2 md:px-4 font-semibold text-green-700">
                                            ₹{d?.price}
                                        </td>
                                        <td className="py-3 px-2 md:px-4">
                                            <button onClick={() => { remove(d) }} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-10 text-gray-500">
                                        Your cart is empty 🛒
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
