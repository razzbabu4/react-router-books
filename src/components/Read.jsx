import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookData } from "../utility/localstorage";
import ReadedBook from "./ReadedBook";
import { IoIosArrowDown } from "react-icons/io";

const Read = () => {
    const books = useLoaderData();
    const [readed, setReaded] = useState([]);
    const [sortBook, setSortBook] = useState([]);

    const handleJobsFilter = filterText => {
        if (filterText === 'rating') {
            const rating = readed.slice().sort((a,b)=> b.rating - a.rating)
            setSortBook(rating)
        }
        else if (filterText === 'pages') {
            const pages = readed.slice().sort((a,b)=> b.totalPages - a.totalPages)
            setSortBook(pages)
        }
        else if (filterText === 'year') {
            const year = readed.slice().sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
            setSortBook(year)
        }
    }


    useEffect(() => {
        const storedReadBook = getStoredBookData();

        if (books.length > 0) {
            const readBook = books.filter(book => storedReadBook.includes(book.bookId));
            setReaded(readBook);
            setSortBook(readBook);
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
                    sortBook.map(read => <ReadedBook key={read.bookId} read={read} />)
                }
            </div>
        </div>
    );
};

export default Read;