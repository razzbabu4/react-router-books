import { useState } from "react";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="px-4 lg:px-24 lg:my-8">
            <div className="h-24 rounded-md bg-[#1313130D] flex items-center justify-center">
                <h1 className="text-4xl font-bold">Books</h1>
            </div>

            <div className="flex lg:justify-start overflow-x-auto overflow-y-hidden flex-nowrap text-gray-100 w-full flex-grow mt-6">
                <Link
                    to=''
                    onClick={() => setActiveTab(0)}
                    rel="noopener noreferrer" className={`flex items-center px-5 py-3 space-x-2 ${activeTab === 0 ? 'border border-b-0 text-black flex-grow-0' : 'border-b text-gray-400'}  rounded-t-lg border-gray-700`}>
                    <span className="flex items-center gap-2"><MdOutlineChromeReaderMode /> Read</span>
                </Link>
                <Link
                    to='wishlist'
                    onClick={() => setActiveTab(1)}
                    rel="noopener noreferrer" className={`flex items-center px-5 py-3 space-x-2 ${activeTab === 1 ? 'border border-b-0 text-black flex-grow-0' : 'border-b text-gray-400'} rounded-t-lg border-gray-700`}>
                    <span className="flex items-center gap-2"><BsJournalBookmarkFill /> Wishlist</span>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;