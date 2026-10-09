import Link from 'next/link';


const Allproducts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', { cache: 'force-cache' })
    const data = await res.json()
    return (
        <div className='mt-10 mb-4 space-y-2'>
            <h1 className='text-xl font-bold'>সব পণ্য</h1>
            <p className='text-gray-500'>মোট {data.length} টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid grid-cols-3 gap-4'>

                {data.map((item) =>
                    <Link href={`/cardcategory/${item.id}`} className='relative rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md cursor-pointer' key={item.id}>
                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F6F2] text-2xl">
                                    {item.image}
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
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Allproducts;