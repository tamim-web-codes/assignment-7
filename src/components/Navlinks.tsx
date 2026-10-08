import React from 'react';
interface Itype {
    nameBn: string
    id: number
    icon: string
}

const Navlinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', { cache: 'force-cache' })
    const data = await res.json()
    console.log(data);

    return (
        <div className='bg-white'>

            <div className='border border-gray-100 p-2 mt-6'>

                <div className='flex container mx-auto  gap-5'>
                    {data.map((dt: Itype) => <div className='' key={dt.id}>

                        <button className='btn border-none bg-white hover:bg-gray-100'>{dt.icon}{dt.nameBn}</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Navlinks;