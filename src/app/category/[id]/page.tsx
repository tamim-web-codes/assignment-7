
import SortSelect from "@/components/SortSelect";
import Link from "next/link";
export const instant = false;

interface IParams {
    params: Promise<{
        id: string;
    }>; searchParams: Promise<{
        sort?: string;
    }>;

}
interface IChange {
    dir: "up" | "down";
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
const Navcatehory = async ({ params, searchParams }: IParams) => {
    const { id } = await params;
    const { sort = "latest" } = await searchParams
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
    const sortedData = [...data].sort((a, b) => {
        if (sort === 'price-low') {
            return a.today - b.today;
        }
        if (sort === 'price-high') {
            return b.today - a.today
        }
        return 0
    })

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
                <SortSelect sort={sort} />
                <p className="mb-3 text-xs text-gray-500">
                    আজকের পণ্যের দাম
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedData.map((single) => {
                        const isUp = single.change.dir === "up";
                        return (
                            <Link
                                href={`/cardcategory/${single.id}`}
                                key={single.id}
                                className="group"
                            >
                                <div className="relative rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md cursor-pointer">
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
                                    <div className="mt-5 flex items-end justify-between">
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
                                        <span
                                            className={`
                                                rounded-full px-3 py-1 text-xs font-medium
                                              ${isUp ? 'text-red-600' : 'text-green-500'}
                                            `}
                                        >

                                            {isUp ? '▲' : '▼'}    {Math.abs(single.change.pct)}%
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