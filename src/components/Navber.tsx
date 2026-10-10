import Image from 'next/image';
import React, { Suspense } from 'react';
import logo from '../../public/logo-icon.png'
import { connection } from 'next/server';
import Link from 'next/link';
import UseInfo from './UseInfo';


const CurrentDate = async () => {
    await connection();

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });

    return <p className="mt-1 min-h-6 font-bold text-black">{date}</p>;
};

const Navber = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-between container mx-auto mt-5'>

                <div className="flex items-center gap-3">
                    <Link href='/'>
                        <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-[#05893E] shadow-lg shadow-green-200 ">
                            <span className="text-4xl">🛒</span>
                        </div>
                    </Link>
                    <div className="flex flex-col leading-none">
                        <h1 className="text-[20px] font-bold tracking-tight text-[#1F2937]">   বাজার দর
                        </h1>

                        <Suspense fallback={<p></p>}>
                            <CurrentDate />
                        </Suspense>

                    </div>
                </div>
                <UseInfo />

            </div>




        </div>
    );
};

export default Navber;