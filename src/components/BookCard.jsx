import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {

    const {bookId, image, tags, bookName, author, category, rating } = book
    return (
        <div>
            <Link to={`/book/${bookId}`} className="card w-full bg-base-100 shadow-xl p-6 border">
                <figure className='bg-[#faf9f9]'><img className='h-80 py-10' src={image} alt="books" /></figure>
                <div className="card-body px-0 pb-2">
                    <ul className="flex gap-6 text-[#23BE0A] font-medium text-lg pl-2">
                        {
                            tags.map((tag, idx) => <li key={idx}>{tag}</li>)
                        }
                    </ul>
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium text-[#131313CC]">By : {author}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between font-medium">
                        <span>{category}</span> <span className='flex items-center gap-2'>{rating} <CiStar className='text-xl' /></span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}
export default BookCard;