
import React from "react";

const Profile = () => {
 const 

    return (
        <div className="min-h-screen bg-[#F0F5F0] px-4 py-6">
            <div className="mx-auto max-w-3xl">
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-[#202A23]">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-xs text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>
                <div className="mb-5 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#DFE8DF] bg-[#FAFCFA] p-5 sm:flex-row">
                    <div className="flex w-full items-center gap-3">
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="font-semibold text-[#263229]">
                                Rezwan Ahmed
                            </h2>
                            <p className="truncate text-sm text-gray-500">
                                rezwanahmed@gmail.com
                            </p>
                        </div>
                    </div>

                    <button className="btn btn-outline h-9 min-h-9 w-full rounded-lg border-red-400 bg-transparent px-4 text-xs font-medium text-red-500 hover:bg-red-50 sm:w-auto">
                        ↩ সাইন আউট
                    </button>
                </div>

                <div className="rounded-xl border border-[#DFE8DF] bg-[#FAFCFA] p-5 sm:p-6">
                    <h2 className="mb-7 text-base font-semibold text-[#202A23]">
                        তথ্য
                    </h2>

                    <div className="px-0 sm:px-3">
                        <label className="mb-2 block text-xs font-medium text-[#263229]">
                            নাম
                        </label>

                        <input
                            type="text"
                            name="name"
                            className="input h-9 w-full rounded-lg border border-[#DFE8DF] bg-transparent outline-none focus:border-green-600"
                        />

                        <button className="btn mt-3 h-9 min-h-9 w-full rounded-lg border-none bg-[#078A43] text-sm font-semibold text-white shadow-md hover:bg-[#067639]">
                            আপডেট
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
