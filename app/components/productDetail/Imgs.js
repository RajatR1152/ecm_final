'use client'
import React from 'react'

export default function Imgs({ target, setTarget, data }) {

    let imgs = [
        data?.image,
        'https://cdn-icons-png.flaticon.com/512/5038/5038590.png',
        'https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-demo-red-flat-icon-isolated-demo-icon-png-image_10722763.png',
        'https://cdn-icons-png.freepik.com/256/5332/5332306.png?semt=ais_white_label'
    ]

    return (
        <div className="container flex md:flex-row flex-col md:w-5/12 h-full rounded-xl">

            <div className="container w-2/12 p-2 h-full flex flex-row md:flex-col gap-10">
                {
                    imgs?.map((i, a) => {
                        return (
                            <div key={a} className="container w-full h-16 p-2 ">
                                <img onClick={() => { setTarget(i) }} src={i} alt="" className="w-ful grayscale-100 cursor-pointer h-full" />
                            </div>
                        )
                    })
                }

            </div>

            <div className="container md:w-10/12 p-4">

                <img src={target} alt="" className="h-auto w-8/12 mx-auto" />

            </div>

        </div>
    )
}
