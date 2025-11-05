'use client'
import React from 'react'
import Mobiles from '../landing/Mobiles'
import Laptops from '../landing/Laptops';
import Shoes from '../landing/Shoes';
import Tshirts from '../landing/Tshirts';
import Earphones from '../landing/Earphones';
import Watches from '../landing/Watches';

export default function Similar({ collection }) {

    if (collection == 'mobiles') return <Mobiles />;
    if (collection == 'laptops') return <Laptops />;
    if (collection == 'shoes') return <Shoes />;
    if (collection == 'tshirts') return <Tshirts />;
    if (collection == 'earphones') return <Earphones />;
    if (collection == 'watches') return <Watches />;

}
