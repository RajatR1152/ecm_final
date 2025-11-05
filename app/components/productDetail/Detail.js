import React, { useContext } from 'react'
import { RxDot } from 'react-icons/rx';
import Rating from '../root/Rating';
import Quantity from './Quantity';
import ShopingService from './ShopingService';
import axios from 'axios';
import { dataContext } from '@/context/Context';
import { useRouter } from 'next/navigation';
import LoaderComponent from '../root/LoaderComponent';
import { toast } from 'react-toastify';

export default function Detail({ d }) {

    const { description, name, rating, price, quantity } = d;

    let colors = [`#e61212`, `#125be6`, 'black'];
    const { email, isLogedIn, prod, setProd, loading, setLoading } = useContext(dataContext);
    const router = useRouter();

    function addCart() {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/addtocart`, { user: email, data: d }).then((res)=>{
            if(res.data.code == 200){
                toast.success("added to cart");
            }
            else{
                toast.error("something went wrong");
            }
        })
    }

    function buyNow(d) {

        setProd(d);
        setLoading(true);
        if (isLogedIn) {
            router.push('/checkout');
        }
        else {
            router.push('/auth/login');
        }
    }

    if (loading) return <LoaderComponent />

    return (

        <div className="container md:w-7/12 h-fit md:h-full overflow-auto  rounded-xl p-4">

            <div className="container w-full flex">
                <h1 className="text-2xl font-semibold mb-5">{name}</h1>
            </div>

            <div className="container w-full">
                <Rating stars={rating} hover={true} />
            </div>

            <h1 className="text-2xl font-semibold mb-5 mx-auto my-5">₹ {price}</h1>

            <div className="container w-fit flex gap-4">
                {
                    colors.map((c, i) => {
                        return (
                            <div key={i} className={`w-6 h-6 rounded-full bg-${c}`}></div>
                        )
                    })
                }
            </div>

            {
                description?.map((x, i) => {
                    if (i < 11) {
                        return (
                            <div key={i} className="container my-4">
                                <div className="flex items-center"><RxDot /><p className='text-sm text-gray-600 font-semibold'>{x}</p></div>
                            </div>
                        )
                    }
                })
            }

            <Quantity data={d} />

            <div className="container w-full flex my-5 gap-5">
                <button onClick={() => { addCart() }} className="px-5 py-3 border-2 font-bold text-md cursor-pointer hover:bg-black hover:text-white w-6/12 border-black">add to cart</button>
                <button onClick={() => { buyNow(d) }} className="px-5 py-3 border-2 font-bold text-md cursor-pointer hover:bg-black hover:text-white w-6/12 border-black">buy now</button>
            </div>

            <ShopingService />

        </div>
    )
}
