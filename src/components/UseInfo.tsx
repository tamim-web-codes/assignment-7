'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UseInfo = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handlesignout = async () => {
        const { data, error } = await authClient.signOut()
        if (data) {
            toast.success('সফলভাবে সাইন আউট হয়েছে')
        }
    }

    return (
        <>
            {user ? (
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100"
                    >
                        <img
                            src={user?.image}
                            alt="Profile"
                            className="h-7 w-7 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{user?.name}</span>
                        <span className="text-xs">⌄</span>
                    </button>

                    {open && (
                        <div className="absolute right-0 top-full z-50 mt-2 w- sm:w-52 w-52 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                            <h3 className="text-sm font-semibold">{user?.name}</h3>
                            <p className="mb-3 text-xs text-gray-500">
                                {user?.email}
                            </p>

                            <Link
                                href="/profile"
                                onClick={() => setOpen(false)}
                                className="mb-3 block text-sm text-gray-700 hover:text-green-700"
                            >
                                👤 আমার প্রোফাইল
                            </Link>

                            <button
                                onClick={handlesignout}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                ↩ সাইন আউট
                            </button>
                        </div>
                    )}
                </div>
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

        </>
    );
};

export default UseInfo;