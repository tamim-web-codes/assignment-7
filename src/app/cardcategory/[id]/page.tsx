
import React from "react";
export const instant = false;
interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}
interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: string;
        pct: number;
    };
    markets: IMarket[];
}
interface IParams {
    params: Promise<{ id: string }>;
}
const Page = async ({ params }: IParams) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const data: IProduct = await res.json();

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("bn-BD").format(price);

    const unitBn =
        data.unit === "kg"
            ? "কেজি"
            : data.unit === "liter"
                ? "লিটার"
                : data.unit === "dozon"
                    ? "ডজন"
                    : data.unit;
    const priceChange = data.today - data.yesterday;
    const changePercent =
        data.yesterday > 0
            ? (Math.abs(priceChange) / data.yesterday) * 100
            : 0;
    const lowestMarket = Math.min(...data.markets.map((m) => m.min));
    const highestMarket = Math.max(...data.markets.map((m) => m.max));
    const averageMarket =
        data.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
        data.markets.length;
    return (
        <main className="min-h-screen bg-[#F0F5F1] px-4 py-6 text-[#25312A] sm:px-6 lg:px-8">
            <div className="mx-auto mb-4 max-w-6xl px-1">
                <nav className="flex items-center gap-2 text-sm text-[#7B867E]">
                    <span>হোম</span>
                    <span className="text-gray-400">&gt;</span>
                    <span>{data.categoryNameBn}</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="font-medium text-[#25312A]">
                        বাজার দর {data.nameBn}
                    </span>
                </nav>
            </div>

            <div className="mx-auto max-w-6xl space-y-5">
                <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#E1E9E2] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:p-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F1] text-3xl">
                            {data.image || data.categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold sm:text-2xl">
                                {data.nameBn}
                            </h1>

                            <p className="mt-1 text-sm text-[#7B867E]">
                                {data.categoryNameBn} · {unitBn}
                            </p>

                            <p className="mt-2 text-sm">
                                গতকালের তুলনায় আজ দাম{" "}
                                <span
                                    className={
                                        priceChange > 0
                                            ? "font-semibold text-red-600"
                                            : priceChange < 0
                                                ? "font-semibold text-green-600"
                                                : "font-semibold text-gray-600"
                                    }
                                >
                                    {priceChange > 0
                                        ? `বেড়েছে ${formatPrice(priceChange)} টাকা`
                                        : priceChange < 0
                                            ? `কমেছে ${formatPrice(Math.abs(priceChange))} টাকা`
                                            : "অপরিবর্তিত"}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="min-w-28 rounded-2xl bg-[#F0F5F1] px-5 py-4 text-center">
                        <p className="text-xs text-[#7B867E]">আজকের দাম</p>
                        <p className="mt-1 text-3xl font-bold">
                            {formatPrice(data.today)}
                        </p>
                        <p className="text-xs text-[#7B867E]">
                            টাকা / {unitBn}
                        </p>
                        <p
                            className={`mt-1 text-xs font-semibold ${priceChange > 0
                                ? "text-red-600"
                                : priceChange < 0
                                    ? "text-green-600"
                                    : "text-gray-500"
                                }`}
                        >
                            {priceChange > 0 ? "▲" : priceChange < 0 ? "▼" : "—"}{" "}
                            {formatPrice(Number(changePercent.toFixed(1)))}%
                        </p>
                    </div>
                </section>
                <section className="rounded-2xl border border-[#E1E9E2] bg-[#FAFCFA] p-4 sm:p-5">
                    <h2 className="mb-3 text-base font-bold">
                        দামের সারসংক্ষেপ
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-[#E1E9E2] p-4">
                            <p className="text-xs text-[#7B867E]">সর্বনিম্ন দাম</p>
                            <p className="mt-1 text-xl font-bold text-green-600">
                                {formatPrice(lowestMarket)}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-xs text-[#7B867E]">
                                বাজারে পাওয়া সর্বনিম্ন দাম
                            </p>
                        </div>
                        <div className="rounded-2xl border border-[#E1E9E2] p-4">
                            <p className="text-xs text-[#7B867E]">সর্বোচ্চ দাম</p>
                            <p className="mt-1 text-xl font-bold text-red-600">
                                {formatPrice(highestMarket)}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-xs text-[#7B867E]">
                                বাজারে পাওয়া সর্বোচ্চ দাম
                            </p>
                        </div>
                        <div className="rounded-2xl border border-[#E1E9E2] p-4">
                            <p className="text-xs text-[#7B867E]">গড় দাম</p>
                            <p className="mt-1 text-xl font-bold text-green-600">
                                {formatPrice(Math.round(averageMarket))}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-xs text-[#7B867E]">
                                প্রতি {unitBn} হিসাবে
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-3 mt-5 text-base font-bold">
                        বাজারভিত্তিক আজকের দাম
                    </h2>
                    <div className="overflow-hidden rounded-2xl border border-[#E1E9E2]">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse text-sm">
                                <thead>
                                    <tr className="bg-[#F7FAF7] text-left text-[#7B867E]">
                                        <th className="px-3 py-3 font-semibold sm:px-4">
                                            বাজার
                                        </th>
                                        <th className="px-3 py-3 font-semibold sm:px-4">
                                            বিভাগ
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold sm:px-4">
                                            সর্বনিম্ন
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold sm:px-4">
                                            সর্বোচ্চ
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold sm:px-4">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.markets.map((market, index) => (
                                        <tr
                                            key={`${market.market}-${index}`}
                                            className={`border-t border-[#DCE4DD] transition-colors hover:bg-[#E8F2E9] ${index % 2 === 0
                                                ? "bg-[#F0F5F1]"
                                                : "bg-[#FAFCFA]"
                                                }`}
                                        >
                                            <td className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">
                                                {market.market}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                                                {market.division}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-right sm:px-4">
                                                {formatPrice(market.min)} টাকা
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-right sm:px-4">
                                                {formatPrice(market.max)} টাকা
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-right font-semibold sm:px-4">
                                                {formatPrice(
                                                    Math.round((market.min + market.max) / 2)
                                                )}{" "}
                                                টাকা
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};
export default Page;

