
import Link from "next/link";
import React from "react";

const Notfound = () => {
    return (
        <main className="flex min-h-[80vh] flex-col items-center justify-center bg-[#F3F7F4] px-4 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#05893E] shadow-lg shadow-green-200">
                <span className="text-4xl">🛒</span>
            </div>

            <h1 className="mt-6 text-8xl font-extrabold text-[#05893E]">
                404
            </h1>

            <h2 className="mt-3 text-2xl font-bold text-gray-800">
                পেজটি খুঁজে পাওয়া যায়নি!
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে
                অথবা ঠিকানাটি ভুল হয়েছে।
            </p>

            <Link
                href="/"
                className="mt-7 rounded-xl bg-[#05893E] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg"
            >
                ← হোম পেজে ফিরে যান
            </Link>

            <p className="mt-8 text-xs text-gray-400">
                বাজার দর — আপনার প্রতিদিনের বাজারদর
            </p>
        </main>
    );
};

export default Notfound;
