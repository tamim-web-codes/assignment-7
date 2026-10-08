import Link from "next/link";
import React from "react";

export const instant = false;

interface IParams {
    params: Promise<{
        id: string;
    }>;
}

interface IChange {
    dir: "up" | "down" | "same";
    pct: number;
}

interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryIcon: string;
    categoryNameBn: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: IChange;
    image: string;
}
const Navcatehory = async ({ params }: IParams) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${id}`,
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data: IProduct[] = await res.json();

    return (
        <main className="min-h-screen bg-[#F3F7F4] px-4 py-6">
            <div className="mx-auto max-w-5xl">

                {data.length > 0 && (
                    <div className="mb-5 rounded-2xl border border-gray-200 bg-white px-5 py-5">

                        <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1F6F2] text-3xl">
                                {data[0].categoryIcon}
                            </div>

                            <div>
                                <h1 className="text-xl font-bold text-gray-800">
                                    {data[0].categoryNameBn}
                                </h1>

                                <p className="mt-1 text-xs text-gray-500">
                                    {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                                </p>
                            </div>

                        </div>

                    </div>
                )}


                <div className="mb-4 flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4">

                    <p className="text-sm text-gray-500">
                        মোট {data.length}টি পণ্য দেখানো হচ্ছে
                    </p>

                    <select
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none"
                        defaultValue="latest"
                    >
                        <option value="latest">সর্বশেষ</option>
                        <option value="price-low">দাম কম</option>
                        <option value="price-high">দাম বেশি</option>
                    </select>

                </div>

                <p className="mb-3 text-xs text-gray-500">
                    আজকের পণ্যের দাম
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((single) => {
                        const isUp = single.change.dir === "up";
                        const isDown = single.change.dir === "down";
                        const isSame = single.change.dir === "same";
                        return (
                            <Link
                                href={`/details/${single.id}`}
                                key={single.id}
                                className="group"
                            >
                                <div className="relative rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">

                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F6F2] text-2xl">
                                                {single.categoryIcon}
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-gray-800">
                                                    {single.nameBn}
                                                </h2>

                                                <p className="text-xs text-gray-500">
                                                    প্রতি {single.unit}
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-5 flex items-end justify-between">

                                        {/* Price */}
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                আজকের দাম
                                            </p>

                                            <div className="mt-1 flex items-baseline gap-1">

                                                <span className="text-xl font-bold text-gray-800">
                                                    {single.today}
                                                </span>

                                                <span className="text-xs text-gray-500">
                                                    টাকা
                                                </span>

                                            </div>
                                        </div>

                                        {/* Change */}
                                        <span
                                            className={`
                                                rounded-full px-3 py-1 text-xs font-medium
                                                ${isUp
                                                    ? "bg-red-50 text-red-600"
                                                    : isDown
                                                        ? "bg-green-50 text-green-600"
                                                        : "bg-gray-100 text-gray-600"
                                                }
                                            `}
                                        >
                                            {isUp && "▲"}
                                            {isDown && "▼"}
                                            {isSame && "—"}{" "}
                                            {Math.abs(single.change.pct)}%
                                        </span>

                                    </div>

                                </div>

                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Navcatehory;