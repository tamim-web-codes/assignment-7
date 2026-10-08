import Link from 'next/link';
import React from 'react';
interface Itype {
    nameBn: string
    id: number
    icon: string
    slug: string
}

const Navlinks = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories', { next: { revalidate: 10 } })
    const data = await res.json()
    console.log(data);

    return (
        <div className='bg-white'>

            <div className='border border-gray-100 p-2 mt-6'>

                <div className='flex container mx-auto  gap-5'>
                    {data.map((dt: Itype) => <Link key={dt.id} href={`/category/${dt.id}`}>

                        <button className='btn border-none bg-white hover:bg-gray-100'>{dt.icon}{dt.nameBn}</button>
                    </Link>)}
                </div>
            </div>
        </div>
    );
};

export default Navlinks;