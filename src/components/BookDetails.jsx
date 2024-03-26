import { Link, useLoaderData, useParams } from "react-router-dom";
import { savedBookData, savedWishlistData } from "../utility/localStorage";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)
    const book = books.find(book => book.bookId === intId);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleReadBook = () => {
        savedBookData(intId);
    }

    const handleWishlistBook = () => {
        savedWishlistData(intId);
    }
    
    return (
        <div className="px-4 lg:px-24 lg:my-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2" ><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="divider my-2"></div>
                    <p>{category}</p>
                    <div className="divider my-2"></div>
                    <p><span className="text-black font-bold">Review : </span>{review}</p>
                    <ul className="flex gap-6 text-[#23BE0A] font-medium mt-4">
                        <li className="text-black font-bold">Tag: </li>
                        {
                            tags.map((tag, idx) => <li key={idx}>#{tag}</li>)
                        }
                    </ul>
                    <div className="divider"></div>
                    <div className="flex gap-8">
                        <div className="space-y-2">
                            <p>Number of pages</p>
                            <p>Publisher</p>
                            <p>Year of Publishing</p>
                            <p>Rating</p>
                        </div>
                        <div className="font-bold space-y-2">
                            <p>: {totalPages}</p>
                            <p>: {publisher}</p>
                            <p>: {yearOfPublishing}</p>
                            <p>: {rating}</p>
                        </div>
                    </div>
                    <div className=" flex gap-6 mt-6">
                        <Link onClick={handleReadBook} className="btn bg-[#1313134D]">Read</Link>
                        <Link onClick={handleWishlistBook} className="btn bg-[#50B1C9]">Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;