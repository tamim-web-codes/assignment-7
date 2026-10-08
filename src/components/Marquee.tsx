
import React from 'react';
import MarqueeText from "react-fast-marquee"
import Benner from './Benner';



const Marquee = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', { cache: 'force-cache' })
    const data = await res.json()

    console.log(data);


    return (
        <>

            <div className='bg-white border-y border-gray-200 '>
                <div className='flex flex-row flex-nowrap whitespace-nowrap overflow-x-auto '>
                    <MarqueeText speed={150} direction='left'
                        className="">
                        {data.map(item => <div className='flex items-center gap-2 h-10 shrink-0 border-l border-gray-300 px-6' key={item.id}>

                            <h1>{item.categoryIcon}</h1>
                            <h1 className='font-bold'>{item.nameBn}</h1>
                            <h1>{item.today} টাকা / {item.unit}</h1>
                            <span className={`${item.change.dir === 'up' ? 'text-[#05893E] items-center' : 'text-red-600 items-center'}`}>
                                {item.change.dir === 'up' ? "▲" : "▼"}
                                <span className='font-bold'>
                                    {Math.abs(item.change.pct)}%
                                </span>
                            </span>


                        </div>
                        )}
                    </MarqueeText>
                </div>
            </div>

        </>


    );
};

export default Marquee;