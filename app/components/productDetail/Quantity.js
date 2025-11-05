'use client'

import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Quantity({ data }) {

    const [quantity, setQuantity] = useState(1);

    function inc() {
        if (quantity => 1 && quantity <= 10) {
            setQuantity(quantity + 1);
            data.quantity = quantity;
        }
    }

    function dec() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            data.quantity = quantity;
        }
    }

    return (
        <>
            <div className="container w-10/12 md:w-2/12 border md:mx-0 mx-auto flex my-10">
                <button onClick={() => { dec() }} className="p-3 cursor-pointer bg-black text-white"><FaMinus /></button>
                <input type="text" onChange={(e) => { data.quantity(e.target.value) }} value={quantity} className="md:w-6/12 w-full focus:outline-none text-center" />
                <button onClick={() => { inc() }} className="p-3 cursor-pointer bg-black text-white"><FaPlus /></button>
            </div>
        </>
    )
}
