'use client'
import Detail from '@/components/productDetail/Detail';
import Imgs from '@/components/productDetail/Imgs';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import LoaderComponent from '@/components/root/LoaderComponent';
import Similar from '@/components/productDetail/Similar';
import Footer from '@/components/header&footer/Footer';
import Categories from '@/components/landing/Categories';
import BackPath from '@/components/root/BackPath';
import { dataContext } from '@/context/Context';
import LocalVars from '@/components/root/LocalVars';

export default function page() {

  const params = useParams();
  let orignal = params.name[0].replaceAll("%20", " ").replaceAll("%2C", "");
  const [data, setData] = useState({});
  const [targetImg, setTargetImg] = useState();
  const [loading2, setLoading2] = useState(true);
  const { loading, setLoading } = useContext(dataContext);

  function getData() {
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/productData`, { id: orignal }).then((res) => {
      if (res.data.code == 200) {
        setData(res.data.data);
        setTargetImg(res.data.data?.image);
        setLoading2(false);
      }
      else {
        toast.error("something went wrong");
      }
    })
  }

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    getData();
  }, [])

  if (loading) return <LoaderComponent />;

  return (
    <div className="container w-full md:overflow-hidden h-fit flex flex-col gap-3 p-3">
      <LocalVars />
      <BackPath collection={data?.collection} />

      <div className="container w-full flex flex-col md:flex-row h-full">

        <Imgs target={targetImg} setTarget={setTargetImg} data={data} />
        <Detail d={data} />

      </div>

      <Similar collection={data.collection} />

      <Categories />

      <Footer />

    </div>

  )
}
