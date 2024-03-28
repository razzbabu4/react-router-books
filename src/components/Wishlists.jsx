import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistData } from "../utility/localstorage";
import WishesBook from "./WishesBook";
import { IoIosArrowDown } from "react-icons/io";

const Wishlists = () => {
    const books = useLoaderData();
    const [wishes, setWishes] = useState([]);
    const [sortBook, setSortBook] = useState([]);

    const handleJobsFilter = filterText => {
        if (filterText === 'rating') {
            const rating = wishes.slice().sort((a,b)=> b.rating - a.rating)
            setSortBook(rating)
        }
        else if (filterText === 'pages') {
            const pages = wishes.slice().sort((a,b)=> b.totalPages - a.totalPages)
            setSortBook(pages)
        }
        else if (filterText === 'year') {
            const year = wishes.slice().sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
            setSortBook(year)
        }
    }

    useEffect(() => {
        const storedWishlistBook = getStoredWishlistData();

        if (books.length > 0) {
            const wishesBook = books.filter(book => storedWishlistBook.includes(book.bookId));
            setWishes(wishesBook);
            setSortBook(wishesBook);
        }
    }, [books])
    return (
        <div>
            <div className="my-6 mx-auto text-center">
                <details className="dropdown">
                    <summary className="btn m-1 text-white bg-[#23BE0A]">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobsFilter('rating')}><a>Rating</a></li>
                        <li onClick={()=>handleJobsFilter('pages')}><a>Number of pages</a></li>
                        <li onClick={()=>handleJobsFilter('year')}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid gap-6 mt-10">
                {
                    sortBook.map(wish => <WishesBook key={wish.bookId} wish={wish}/>)
                }
            </div>
        </div>
    );
};

export default Wishlists;