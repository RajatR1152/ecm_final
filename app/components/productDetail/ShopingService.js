import React from 'react'
import { FaAmazonPay } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function ShopingService() {
    return (
        <div className="container w-full flex gap-4 text-white bg-black rounded-xl my-8">

            <div className="container md:w-3/12 flex flex-col items-center justify-center p-2 md:p-4 rounded-xl">
                <TbTruckDelivery className='text-2xl md:text-5xl ' />
                <h1 className="md:text-md my-2 md:font-semibold text-center">fast shipping</h1>
            </div>

            <div className="container md:w-3/12 flex flex-col items-center justify-center p-4 rounded-xl">
                <FaAmazonPay className='text-2xl md:text-5xl ' />
                <h1 className="md:text-md my-2 md:font-semibold text-center">pay on delivery</h1>
            </div>

            <div className="container md:w-3/12 flex flex-col items-center justify-center p-4 rounded-xl">
                <RiSecurePaymentLine className='text-2xl md:text-5xl ' />
                <h1 className="md:text-md my-2 md:font-semibold text-center">secure payment</h1>
            </div>

            <div className="container w-3/12 hidden md:flex flex-col items-center justify-center p-4 rounded-xl">
                <TbTruckDelivery className='text-2xl md:text-5xl ' />
                <h1 className="md:text-md my-2 md:font-semibold text-center">fast shipping</h1>
            </div>

        </div>
    )
}
