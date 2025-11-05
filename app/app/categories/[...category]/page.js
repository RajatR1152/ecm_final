'use client';

import Footer from '@/components/header&footer/Footer';
import Header from '@/components/header&footer/Header';
import LoaderComponent from '@/components/root/LoaderComponent';
import GridView from '@/components/shop/GridView';
import ListView from '@/components/shop/ListView';
import { dataContext } from '@/context/Context';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';

export default function Page() {
    const param = useParams();
    const [data, setData] = useState([]);
    const category = param.category[0];
    const [view, setView] = useState('grid');
    const [range, setRange] = useState(100000);
    const [sort, setSort] = useState("lth");
    const [filteredData, setFilteredData] = useState(data);
    const { loading, setLoading } = useContext(dataContext);

    useEffect(() => {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/${category}`)
            .then((res) => {
                setData(res.data);
                setFilteredData(res.data);
            });
    }, [category]);

    useEffect(() => {
        let updated = [...data];
        updated = updated.filter(item => item.price <= range);
        if (sort === "lth") {
            updated.sort((a, b) => a.price - b.price);
        } else if (sort === "htl") {
            updated.sort((a, b) => b.price - a.price);
        } else if (sort === "atoz") { 
            updated.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "ztoa") {
            updated.sort((a, b) => b.name.localeCompare(a.name));
        }
        setFilteredData(updated);
    }, [range, sort, data]);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    if (loading) {
        return <LoaderComponent />
    }

    return (
        <div className="container w-full h-screen">
            <div className="w-full h-fit relative">
                <Header />
            </div>

            <div className="container w-full mt-10 p-5 h-screen overflow-auto">
                <div className="container w-full p-2 flex gap-5 items-center">
                    <div className="w-6/12 md:w-fit ms-auto items-center gap-4 justify-center container flex">
                        <label className='font-semibold md:text-md text-xs' htmlFor="pricerange">
                            Price range: ₹ {range}
                        </label>
                        <input
                            onChange={(e) => setRange(Number(e.target.value))}
                            type="range"
                            min="200"
                            max="10000"
                            step="100"
                            value={range}
                            name="pricerange"
                            id="pricerange"
                            className='w-8/12'
                        />
                    </div>

                    <select
                        className='p-3 text-xs md:text-lg font-semibold focus:outline-none w-5/12 md:w-fit'
                        name="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="lth">Price: Low to High</option>
                        <option value="htl">Price: High to Low</option>
                        <option value="atoz">A to Z</option>
                        <option value="ztoa">Z to A</option>
                    </select>

                    {view === 'list' ? (
                        <IoGridOutline onClick={() => setView('grid')} className='me-10 md:block hidden cursor-pointer' />
                    ) : (
                        <FaList onClick={() => setView('list')} className='me-10 cursor-pointer md:block hidden' />
                    )}
                </div>

                {view === 'grid' ? (
                    <GridView category={category} data={category == 'mobiles' || category == 'laptops' ? data : filteredData} />
                ) : (
                    <ListView category={category} data={category == 'mobiles' || category == 'laptops' ? data : filteredData} />
                )}
            </div>

            <div className="w-full h-fit relative">
                <Footer />
            </div>
        </div>
    );
}
