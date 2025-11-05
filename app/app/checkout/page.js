'use client'
import Header from '@/components/header&footer/Header';
import Rating from '@/components/root/Rating';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useRazorpay } from 'react-razorpay';
import { toast } from 'react-toastify';

export default function page() {
    const { prod, email } = useContext(dataContext);
    const [address, setAddress] = useState('');
    const [user, setUser] = useState(null);
    const { Razorpay } = useRazorpay();

    const totalAmount = (prod.quantity + 1) * prod.price;

    const imgs = [
        prod?.image,
        'https://cdn-icons-png.flaticon.com/512/5038/5038590.png',
        'https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-demo-red-flat-icon-isolated-demo-icon-png-image_10722763.png',
        'https://cdn-icons-png.freepik.com/256/5332/5332306.png?semt=ais_white_label'
    ];

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getuser`, { email });
                setUser(res.data);
                if (res.data?.address) setAddress(res.data.address);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [email]);

    const handlePayment = async () => {
        if (address.length > 2) {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/order`, { amount: totalAmount });
            const { amount, orderId } = res.data;

            const options = {
                key: "rzp_test_PwPHcfV19dGbu7",
                amount: amount,
                currency: "INR",
                name: "Test Company",
                description: "Test Transaction",
                order_id: orderId,
                handler: (response) => {
                    let finalData = {
                        collection: prod.collection,
                        description: prod.description,
                        image: prod.image,
                        name: prod.name,
                        price: prod.price * (prod.quantity + 1),
                        quantity: prod.quantity,
                        rating: prod.rating,
                        _id: prod._id,
                        address: address,
                    };

                    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/createorder`, { data: finalData, email: email }).then((res) => {
                        if (res.data.code == 200) {
                            toast.success(res.data.message);
                        } else {
                            toast.error("something went wrong");
                        }
                    });
                },
                prefill: {
                    name: "john",
                    email: email,
                },
                theme: {
                    color: "#182952",
                },
            };

            const razorpayInstance = new Razorpay(options);
            razorpayInstance.open();

            razorpayInstance.on('payment.failed', (response) => {
                console.log('Payment failed:', response.error);
                alert("Payment Failed. Please try again.");
            });
        } else {
            toast.warning('Enter proper address!');
        }
    };

    return (
        <>
            <Header />
            <div className="container mx-auto mt-10 p-4 flex flex-col md:flex-row gap-8">

                <div className="flex flex-col md:flex-row md:w-5/12 gap-4 bg-white rounded-xl shadow-lg p-4">
                    <div className="flex md:flex-col gap-3 w-full md:w-1/5">
                        {imgs.map((img, idx) => (
                            <div key={idx} className="h-20 cursor-pointer hover:scale-105 transition">
                                <img src={img} alt="" className="w-full h-full object-contain grayscale" />
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                        <img src={prod.image} alt="" className="h-60 md:h-80 w-full object-contain" />
                    </div>
                </div>

                <div className="md:w-7/12 flex flex-col gap-6 p-6 bg-white rounded-xl shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-bold">{prod.name}</h1>
                    <Rating stars={prod.rating} />

                    <div className="flex justify-between text-lg md:text-xl font-semibold">
                        <span>{prod.quantity + 1} x ₹{prod.price}</span>
                        <span>Total: ₹{totalAmount}</span>
                    </div>

                    <div>
                        <label className="block text-lg font-semibold mb-2">Shipping Address:</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter shipping address..."
                            className="w-full h-32 md:h-40 p-4 border border-gray-300 rounded-lg resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button
                            onClick={handlePayment}
                            className="flex-1 py-4 text-white font-semibold bg-black rounded-lg hover:bg-white hover:text-black border border-black transition"
                        >
                            Pay Now
                        </button>
                        <button
                            onClick={() => window.history.back()}
                            className="flex-1 py-4 font-semibold border border-black rounded-lg hover:bg-black hover:text-white transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
