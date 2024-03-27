import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistData } from "../utility/localstorage";
import WishesBook from "./WishesBook";

const Wishlists = () => {
    const books = useLoaderData();
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const storedWishlistBook = getStoredWishlistData();

        if (books.length > 0) {
            const wishesBook = books.filter(book => storedWishlistBook.includes(book.bookId));
            setWishes(wishesBook)
        }
    }, [books])
    return (
        <div>
            <div className="grid gap-6 mt-10">
                {
                    wishes.map(wish => <WishesBook key={wish.bookId} wish={wish}/>)
                }
            </div>
        </div>
    );
};

export default Wishlists;