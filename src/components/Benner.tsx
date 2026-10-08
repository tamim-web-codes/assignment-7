import Image from 'next/image';
import React from 'react';
import benner from '../../public/bazar-hero.png'
import Bazar6product from './Bazar-6-product';

const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full'
})

const Benner = () => {

    return (
        <>
            <div className='flex justify-between items-center container mx-auto mt-5 bg-base-100 shadow-sm px-5 pb-8 rounded-2xl'>
                <div className='space-y-5'>
                    <h1 className='inline-block rounded-full bg-[#E5F4EC] px-4 py-1.5 font-bold text-[#05893E] '>{date}</h1>
                    <h1 className='text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h1>
                    <p className='text-gray-500'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — <br />বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <button className='btn bg-[#05893E] text-white rounded-xl px-6 py-4'>সব পণ্য দেখুন</button>
                </div>
                <div>
                    <Image src={benner} alt='' />
                </div>
            </div>
            <Bazar6product />
        </>
    );
};

export default Benner;