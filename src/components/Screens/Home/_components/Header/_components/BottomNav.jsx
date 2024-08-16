import React from "react";
import { FiChevronDown } from "react-icons/fi";

const BottomNav = () => {
    return (
        <nav className="flex justify-between items-center xs:px-40 px-20 py-2 bg-white shadow">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
                <div className="flex items-center space-x-1">
                    <span className="text-black text-[15px] font-semibold">
                        Home
                    </span>
                    <FiChevronDown className="text-gray-500" />
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-purple-600 text-[15px] font-semibold">
                        Shop
                    </span>
                    <FiChevronDown className="text-gray-500" />
                </div>
                <span className="text-purple-600 text-[15px] font-semibold">
                    Fruits & Vegetables
                </span>
                <span className="text-black text-[15px] font-semibold">
                    Beverages
                </span>
                <span className="text-black text-[15px] font-semibold">
                    Blog
                </span>
                <span className="text-black text-[15px] font-semibold">
                    Contact
                </span>
            </div>

            {/* Right Menu Items */}
            <div className="flex space-x-8 items-center">
                <div className="flex items-center space-x-1">
                    <span className="text-black text-[15px] font-semibold">
                        Trending Products
                    </span>
                    <FiChevronDown className="text-gray-500" />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-red-600 text-[15px] font-semibold">
                        Almost Finished
                    </span>
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                    </div>
                    <FiChevronDown className="text-red-600" />
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;
