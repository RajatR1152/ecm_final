import React from 'react'
import { FaList } from 'react-icons/fa'
import { IoGridOutline } from "react-icons/io5";


export default function Filter({ view, setView ,range, setRange}) {



    return (
        <div className="container w-full p-2 flex gap-5 items-center ">

            <div className=" w-fit ms-auto items-center gap-4 justify-center container flex">
                price range:
                <input onChange={() => { }} type="range" value={10} name="pricerange" id="pricerange" />
            </div>

            <select className='p-3  ms-auto focus:outline-none w-fit' name="sort" id="">
                <option value="lth">price low to high</option>
                <option value="lth">price high to low</option>
                <option value="lth">a to z</option>
                <option value="lth">z to a</option>
            </select>

            {view == 'list' ? <IoGridOutline onClick={() => { setView('grid') }} className='me-10 md:block hidden cursor-pointer' /> : <FaList onClick={() => { setView('list') }} className='me-10 cursor-pointer md:block hidden' />}

        </div>
    )
}
