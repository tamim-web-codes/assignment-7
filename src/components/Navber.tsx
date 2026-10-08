import Image from 'next/image';
import React, { Suspense } from 'react';
import logo from '../../public/logo-icon.png'
import { connection } from 'next/server';
import Link from 'next/link';


// const date = new Date().toLocaleDateString('bn-BD', {
//     dateStyle: 'full'
// })


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

                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#05893E]">
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt="বাজার দর"
                                width={34}
                                height={34}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col leading-none">
                        <h1 className="text-[20px] font-bold tracking-tight text-[#1F2937]">   বাজার দর
                        </h1>

                        <Suspense fallback={<p></p>}>
                            <CurrentDate />
                        </Suspense>

                    </div>
                </div>

                <div className='flex gap-4'>
                    <button className='btn border-none font-bold bg-white'>সাইন ইন</button>
                    <button className='btn bg-[#05893E] font-bold text-white'>সাইন আপ</button>
                </div>
            </div>




        </div>
    );
};

export default Navber;