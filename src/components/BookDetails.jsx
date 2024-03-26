import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId == id);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    console.log(book)
    return (
        <div className="px-4 lg:px-24 lg:my-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-1/2" ><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p><span>Review : </span>{review}</p>
                    <ul className="flex gap-6 text-[#23BE0A] font-medium text-lg pl-2">
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
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className=" flex gap-6 mt-6">
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;