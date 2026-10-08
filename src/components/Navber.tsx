import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo-icon.png'


const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full'
})


const Navber = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-between container mx-auto mt-5'>

                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#05893E]">
                        <Image
                            src={logo}
                            alt="বাজার দর"
                            width={34}
                            height={34}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <h1 className="text-[20px] font-bold tracking-tight text-[#1F2937]">   বাজার দর
                        </h1>
                        <p className="mt-1.5 text-[10px] font-medium">
                            {date}
                        </p>
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