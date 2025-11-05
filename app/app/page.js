'use client'
import Header from '@/components/header&footer/Header';
import Navs from '@/components/header&footer/Navs';
import Landing from '@/components/root/Landing'
import React, { useState } from 'react'

export default function page() {

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <Header show={showSideBar} setShow={setShowSideBar} />

      <div className="container w-full flex">

        {
          showSideBar && <div className="container absolute md:hidden">
            <Navs />
          </div>
        }

        <div className="container w-full h-screen  p-5">

          <Landing show={showSideBar} setShow={setShowSideBar} />

        </div>

      </div>

    </>
  )
}
