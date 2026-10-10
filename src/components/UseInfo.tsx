'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const UseInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handlesignout = async () => {
        const { data, error } = await authClient.signOut()
        if (data) {
            toast.success('সফলভাবে সাইন আউট হয়েছে')
        }
    }

    return (
        <div>
            <div>
                {user ? (
                    <button className='btn' onClick={handlesignout}>signOut</button>

                ) : (


                    <div className="flex gap-4">
                        <Link href='/signin'>
                            <button className="btn border-none font-bold bg-white">

                                সাইন ইন
                            </button>
                        </Link>

                        <Link href="/signup">
                            <button className="btn bg-[#05893E] font-bold text-white">
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
                )}

            </div>
        </div >
    );
};

export default UseInfo;