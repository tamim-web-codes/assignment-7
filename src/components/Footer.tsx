
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-300 px-4 py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

                <div>
                    <h1 className="text-sm text-gray-700 sm:text-base">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </h1>
                </div>

                <div>
                    <p className="text-xs text-gray-500 sm:text-sm">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
                        পরিবর্তিত হয়।
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
