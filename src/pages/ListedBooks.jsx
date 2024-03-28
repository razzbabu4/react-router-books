import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet} from "react-router-dom";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="px-4 lg:px-24 lg:my-8">
            <div className="h-24 rounded-md bg-[#1313130D] flex items-center justify-center">
                <h1 className="text-4xl font-bold">Books</h1>
            </div>
            <div className="my-6 mx-auto text-center">
                <details className="dropdown">
                    <summary className="btn m-1 text-white bg-[#23BE0A]">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </details>
            </div>


            <div className="flex lg:justify-start overflow-x-auto overflow-y-hidden flex-nowrap text-gray-100 w-full flex-grow">

                <Link
                    to=''
                    onClick={() => setActiveTab(0)}
                    rel="noopener noreferrer" className={`flex items-center px-5 py-3 space-x-2 ${activeTab === 0 ? 'border border-b-0 text-black flex-grow-0' : 'border-b text-gray-400'}  rounded-t-lg border-gray-700`}>
                    <span>Read</span>
                </Link>

                <Link
                    to='wishlist'
                    onClick={() => setActiveTab(1)}
                    rel="noopener noreferrer" className={`flex items-center flex-grow px-5 py-3 space-x-2 ${activeTab === 1 ? 'border border-b-0 text-black flex-grow-0' : 'border-b text-gray-400'} rounded-t-lg border-gray-700`}>
                    <span>Wishlist</span>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;