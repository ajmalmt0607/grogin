import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiSearch,
    FiX, // Close icon
    FiMapPin,
} from "react-icons/fi";
import logo from "../../../../../../assets/logo-grogin.png";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchDisabled, setSearchDisabled] = useState(false); // New state for disabling search
    const [message, setMessage] = useState(""); // New state for message
    const cartItems = useSelector((state) => state.cart);
    const wishlistItems = useSelector((state) => state.wishlist);
    const navigate = useNavigate();
    const location = useLocation();

    const totalCartQuantity = cartItems.reduce(
        (total, item) => total + (item.quantity || 0),
        0
    );

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const search = queryParams.get("search") || "";
        setSearchQuery(search);
        setIsSearching(!!search);
        setSearchDisabled(!!search); // Disable search input if there's a search query
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            if (searchDisabled) {
                setMessage(
                    "Please clear the current search before searching again."
                );
                return;
            }
            setIsSearching(true);
            setSearchDisabled(true); // Disable search input
            navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setIsSearching(false);
        setSearchDisabled(false); // Enable search input
        setMessage(""); // Clear any existing message
        navigate(`/`); // Fetch all products by navigating to the homepage without search
    };

    return (
        <nav className="flex items-center justify-between xs:px-40 px-20 py-2 border-b bg-white shadow">
            <div className="flex items-center space-x-4">
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="Grogin Logo"
                        className="h-[34px] w-[142px]"
                    />
                </Link>
                <FiMapPin className="text-gray-500" fontSize={"24px"} />
                <div className="flex flex-col">
                    <span className="text-gray-500 text-[11px]">
                        Deliver to
                    </span>
                    <span className="text-black font-medium text-[13px]">
                        all
                    </span>
                </div>
            </div>
            <div className="flex-1 mx-4">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        placeholder="Search for products, categories or brands..."
                        className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 bg-slate-100"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        disabled={searchDisabled} // Disable input if needed
                    />
                    {isSearching ? (
                        <button
                            type="button"
                            className="absolute top-2 right-2"
                            onClick={handleClearSearch}
                        >
                            <FiX className="text-gray-400" fontSize={"22px"} />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="absolute top-2 right-2"
                        >
                            <FiSearch
                                className="text-gray-400"
                                fontSize={"22px"}
                            />
                        </button>
                    )}
                </form>
                {message && (
                    <div className="mt-2 text-red-500 text-sm">{message}</div>
                )}
            </div>
            <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center space-x-1">
                    <FiUser className="text-black" fontSize={"26px"} />
                    <span className="text-black text-[12px] font-medium">
                        Joseph
                    </span>
                </div>
                <Link
                    to="/wishlist"
                    className="relative flex flex-col items-center space-x-1"
                >
                    <FiHeart className="text-black" fontSize={"26px"} />
                    <div className="absolute -top-1 right-0.5 bg-red-600 text-white text-xs rounded-full w-[17px] h-[17px] flex items-center justify-center">
                        {wishlistItems.length}
                    </div>
                    <span className="text-black text-[12px] font-medium">
                        Wishlist
                    </span>
                </Link>
                <Link
                    to="/cart"
                    className="relative flex flex-col items-center space-x-1"
                >
                    <FiShoppingCart className="text-black" fontSize={"26px"} />
                    <div className="absolute -top-1 right-2 bg-red-600 text-white text-xs rounded-full w-[17px] h-[17px] flex items-center justify-center">
                        {totalCartQuantity}
                    </div>
                    <span className="text-black text-[12px] font-medium">
                        Your Cart
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
