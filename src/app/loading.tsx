
const Loading = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F7F4]">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#05893E] shadow-lg shadow-green-200">
                <span className="text-4xl">🛒</span>
            </div>

            <h1 className="mt-5 text-2xl font-extrabold text-[#05893E]">
                বাজার দর
            </h1>

            <p className="mt-2 text-sm text-gray-500">
                বাজারদরের তথ্য লোড হচ্ছে...
            </p>

            <div className="mt-6 h-2 w-48 overflow-hidden rounded-full bg-green-100">
                <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#05893E]" />
            </div>

            <style>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};

export default Loading;
