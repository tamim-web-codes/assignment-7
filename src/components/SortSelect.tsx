'use client'

import React from 'react';

const SortSelect = ({ sort }: { sort: string }) => {
    return (
        <div>
            <div className="mb-4 flex items-center justify-end-safe rounded-2xl border border-gray-200 bg-white px-5 py-4">
                <form>
                    <select
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none cursor-pointer"
                        defaultValue={sort}
                        name='sort'
                        onChange={(e) => e.currentTarget.form?.requestSubmit()}
                    >
                        <option value="latest">ডিফল্ট</option>
                        <option value="price-low">দাম কম থেকে বেশি</option>
                        <option value="price-high">দাম বেশি থেকে কম</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default SortSelect;