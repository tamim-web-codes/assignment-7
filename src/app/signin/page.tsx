'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const signIn = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string }
        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            toast.success('“সফলভাবে সাইন ইন হয়েছে')
        }
        if (error) {
            toast.error('সাইন ইন ব্যর্থ হয়েছে')

        }
    }
    const handlegooglesignin = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: 'google'
        })
    }
    const handlegithubsignin = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: 'github'
        })
    }

    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div>

                <h1 className="text-center text-2xl font-bold sm:text-3xl"> সাইন ইন</h1>
                <p className="mb-5 text-sm text-center text-[#7B867E]">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন। </p>
                <form onSubmit={onSubmit}>

                    <fieldset className="fieldset bg-base-100  border-base-300 rounded-box w-xs border p-6">

                        <label className="label">ইমেইল</label>
                        <input type="email" name="email" className="input" placeholder="ইমেইল" />

                        <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                        />

                        <button type="submit" className="btn bg-green-700 rounded-xl text-white font-bold mt-4">
                            সাইন ইন
                        </button>

                        <div className="flex items-center gap-4 py-1"> <div className="h-[2px] flex-1 bg-[#E3E9E4]" /> <span className="text-sm text-[#657168]">অথবা</span> <div className="h-[2px] flex-1 bg-[#E3E9E4]" /> </div>
                        <button onClick={handlegooglesignin} className="btn btn-outline w-full border-base-300 bg-white">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="h-5 w-5"
                            />
                            Google দিয়ে চালিয়ে যান
                        </button>
                        <button onClick={handlegithubsignin} className="btn btn-outline w-full border-base-300 bg-white">
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="GitHub"
                                className="h-5 w-5"
                            />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                        <Link href='/signup'>
                            <p className="mt-4 text-center text-sm"> অ্যাকাউন্ট আছে?{' '} <span className="cursor-pointer font-medium text-green-700"> সাইন আপ করুন </span> </p>
                        </Link>

                    </fieldset>
                </form>
                <Link href='/'>
                    <p className="mt-6 text-center text-sm text-[#7B867E]"> <span className="cursor-pointer"> ← হোম পেজে ফিরে যান </span> </p>
                </Link>
            </div>
        </div>
    );
};

export default signIn;