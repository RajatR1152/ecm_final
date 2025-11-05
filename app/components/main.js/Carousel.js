'use client'
import React, { useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import Rating from '../root/Rating';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';


export default function Carousel() {

    const [counter, setCounter] = useState(0);

    const [hovered, setHovered] = useState(false);

    const [showQr, setShowQr] = useState(false);

    setTimeout(() => {

        if (counter <= data.length - 2) {
            inc();
        }
        else {
            setCounter(0);
        }


    }, 3000);

    let inc = () => {
        setCounter(counter + 1);
    }

    let data = [
        {
            img: 'https://m.media-amazon.com/images/I/51lYbJhOmbL._UF1000,1000_QL80_.jpg',
            rating: '4',
            off: '20',
            text: "Big Screen, Bigger Savings – Up to 40% Off on Smart TVs!"
        },
        {
            img: 'https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296',
            rating: '5',
            off: '16',
            text: 'Work, Play, Create – Special Discounts on Top Brands!'
        },
        {
            img: 'https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$',
            rating: '4.3',
            off: '18',
            text: "Your Next Upgrade Awaits – Shop Latest Smartphones Today!"
        },
        {
            img: 'https://m.media-amazon.com/images/I/61kReoWGtHL._UF1000,1000_QL80_.jpg',
            rating: '4.5',
            off: '39',
            text: 'Crystal-Clear Sound, Pocket-Friendly Price – Grab Yours Now!'
        }
    ];

    return (
        <div className="container w-full h-fit md:h-screen md:p-5">

            <div className="container w-full h-[90%] p-4 bg-cover bg-no-repeat mt-10 flex md:flex-row flex-col">

                <img src={data[counter].img} className='w-auto md:hidden block h-auto lg:h-full ms-auto' alt="" />

                <div className="container md:w-8/12 p-4 h-full flex flex-col items-center justify-center gap-7">

                    <button onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }} className="px-5 py-4 cursor-pointer font-semibold text-sm capitalize flex gap-1 items-center justify-center rounded-lg bg-[#EBFF00] hover:bg-black hover:text-white">
                        <MdOutlineStar size={20} /> product rating <Rating hover={hovered} stars={data[counter].rating} />
                    </button>

                    <h1 className="text-xl w-full md:text-3xl md:w-10/12 font-semibold text-center text-gray-700">{data[counter].text}</h1>
                    <p className="text-md md:w-8/12 text-center fonse-bold text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium esse dolores?Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, </p>

                    <div className="container flex items-center justify-center gap-2 w-fit mx-auto p-3 mt-8">

                        <div className="container w-fit flex flex-col items-center justify-center h-fit">

                            {
                                showQr &&
                                <>
                                    <div onMouseEnter={() => { setShowQr(true) }} onMouseLeave={() => { setShowQr(false) }} className="container -mt-[270px] absolute w-52 p-5 h-48 bg-black rounded-xl">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfKW7uypGvqrrhgoeJK0yHaez3ihts3ingn9uJSQnjgdYfKBq6C9ZKJAWagF6odyTM_0&usqp=CAU" alt="" className="w-full h-full" />
                                    </div>
                                    <div onMouseEnter={() => { setShowQr(true) }} onMouseLeave={() => { setShowQr(false) }} className="container -mt-[60px] absolute w-52 p-4 h-8 bg-transparent"></div>
                                </>
                            }

                            <div className="container w-fit p-1 cursor-pointer rounded-lg border">
                                <img onMouseEnter={() => { setShowQr(true) }} onMouseLeave={() => { setShowQr(false) }} src="https://www.pngmart.com/files/23/Qrcode-PNG-Pic.png" alt="" className="w-7 h-7 rounded-sm" />
                            </div>

                        </div>

                        <button className="px-3 h-fit cursor-pointer py-2 flex items-center justify-center gap-3 font-semibold capitalize border bg-transparent text-black hover:bg-black hover:text-white rounded-lg">explore more <FaArrowRight /></button>

                    </div>

                </div>

                <img src={data[counter].img} className='w-auto md:block hidden md:h-3/5 my-auto lg:h-full ms-auto' alt="" />

            </div>

        </div>
    )
}
