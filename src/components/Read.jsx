import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookData } from "../utility/localstorage";
import ReadedBook from "./ReadedBook";
import { SortingContext } from "../pages/ListedBooks";

const Read = () => {
    const sort = useContext(SortingContext)
    console.log(sort)
    const books = useLoaderData();
    const [readed, setReaded] = useState([]);

    useEffect(() => {
        const storedReadBook = getStoredBookData();

        if (books.length > 0) {
            const readBook = books.filter(book => storedReadBook.includes(book.bookId));
            setReaded(readBook)
        }
    }, [books])
    return (
        <div>
            <div className="grid gap-6 mt-10">
                {
                    readed.map(read => <ReadedBook key={read.bookId} read={read} />)
                }
            </div>
        </div>
    );
};

export default Read;