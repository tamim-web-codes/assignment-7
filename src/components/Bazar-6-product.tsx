import React from 'react';
import Allproducts from './Allproducts';


const Bazar6product = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', { cache: 'force-cache' })
    const data = await res.json()

    const increese = data.filter((item) => item.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)

    const decreese = data.filter((item) => item.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct).slice(0, 6)



    return (
        <div className='container mx-auto '>

            <div className='mt-5'>
                <h1 className="mb-4 text-xl font-bold text-gray-800"><span className="text-red-500 text-xl ">▲</span> আজ দাম বেড়েছে</h1>

                <div className='grid grid-cols-3 gap-4'>

                    {increese.map((item) =>
                        <div className='rounded-2xl border border-gray-200 bg-white p-4 ' key={item.id}>
                            <div className="flex items-center justify-between gap-3">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F6F2] text-2xl">
                                        {item.categoryIcon}
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-gray-800">
                                            {item.nameBn}
                                        </h1>
                                        <p className="text-xs text-gray-600">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>

                                </div>
                                <span className={`${item.change.dir === 'up' ? 'text-red-600 rounded-full bg-[#F1F6F2] px-3 py-1 text-xs font-medium' : 'text-green-600 rounded-full bg-[#F1F6F2] px-3 py-1 text-xs font-medium'} `}>
                                    {item.change.dir === 'up' ? '▲' : '▼'}
                                    {Math.abs(item.change.pct)}%
                                </span>

                            </div>

                            <div className="mt-4">
                                <p className="text-xs text-gray-600">
                                    আজকের দাম
                                </p>

                                <p className="text-xl font-bold text-gray-800">
                                    {item.today} টাকা
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <div className='mt-5'>
                <h1 className="mb-4 text-xl font-bold text-gray-800"><span className="text-green-600 text-xl ">▼</span> আজ দাম কমেছে</h1>

                <div className='grid grid-cols-3 gap-4'>

                    {decreese.map((item) =>
                        <div className='rounded-2xl border border-gray-200 bg-white p-4 ' key={item.id}>
                            <div className="flex items-center justify-between gap-3">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F6F2] text-2xl">
                                        {item.categoryIcon}
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-gray-800">
                                            {item.nameBn}
                                        </h1>
                                        <p className="text-xs text-gray-600">
                                            প্রতি {item.unit}
                                        </p>
                                    </div>

                                </div>
                                <span className={`${item.change.dir === 'up' ? 'text-red-600 rounded-full bg-[#F1F6F2] px-3 py-1 text-xs font-medium' : 'text-green-600 rounded-full bg-[#F1F6F2] px-3 py-1 text-xs font-medium'} `}>
                                    {item.change.dir === 'up' ? '▲' : '▼'}
                                    {Math.abs(item.change.pct)}%
                                </span>

                            </div>

                            <div className="mt-4">
                                <p className="text-xs text-gray-600">
                                    আজকের দাম
                                </p>

                                <p className="text-xl font-bold text-gray-800">
                                    {item.today} টাকা
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <Allproducts />
        </div>
    );
};

export default Bazar6product;