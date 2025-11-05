'use client'
import React, { use, useContext, useEffect, useState } from 'react'
import cats from '@/components/assets/categories.json'
import axios from 'axios'
import GridView from '@/components/shop/GridView';
import ListView from '@/components/shop/ListView';
import { IoGridOutline } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import LoaderComponent from '@/components/root/LoaderComponent';
import { dataContext } from '@/context/Context';
import LocalVars from '@/components/root/LocalVars';

export default function page() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [view, setView] = useState('grid');
  const [range, setRange] = useState(10000);
  const [sort, setSort] = useState("lth");
  const [loadin, setLoadin] = useState(true);
  const [cat, setCat] = useState('')
  const { loading, setLoading } = useContext(dataContext);

  useEffect(() => {
    searchCategory('mobiles');
    setCat('mobiles');
  }, [])


  function searchCategory(c) {
    setLoadin(true);
    setCat(c);
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/${c}`).then((d) => {
      setData(d.data);
      setLoadin(false);
    })
  }

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderComponent />
  }



  return (
    <div className="container w-full h-screen flex">

      <div className="container w-2/12 flex flex-col gap-5 h-full p-5">
        <LocalVars />

        <h1 className="text-lg font-bold text-black capitalize">categories</h1>
        {
          cats.map((c, i) => {
            return (
              <button onClick={() => { searchCategory(c.category) }} key={i} className="px-5 py-2 border border-black bg-transparent text-black hover:bg-black hover:text-white font-semibol text-md cursor-pointer rounded-lg">
                {c.category}
              </button>
            )
          })
        }
      </div>

      <div className="container w-10/12 p-5 h-screen overflow-auto ">


        <div className="container w-full p-2 flex gap-5 items-center ">

          <div className="w-6/12 md:w-fit ms-auto items-center gap-4 justify-center container flex">
            <label className='font-semibold md:text-md text-xs' htmlFor="pricerange">Price range: ₹ {range}</label>
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

          {view === 'list'
            ? <IoGridOutline onClick={() => setView('grid')} className='me-10 md:block hidden cursor-pointer' />
            : <FaList onClick={() => setView('list')} className='me-10 cursor-pointer md:block hidden' />}
        </div>

        {view === 'grid'
          ? <GridView category={cat} data={cat == 'mobiles' || cat == ' laptops' ? data : filteredData} />
          : <ListView category={cat} data={cat == 'mobiles' || cat == ' laptops' ? data : filteredData} />}


      </div>

    </div>
  )
}
