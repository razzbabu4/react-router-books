import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import PropTypes from 'prop-types';

const ReadedBook = ({ read }) => {
    const {bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = read
    return (
        <div>
            <div className="card lg:card-side shadow-xl border p-6">
                <figure className='bg-[#faf9f9]'><img className="lg:h-72 w-72 lg:p-6" src={image} alt="Movie" /></figure>
                <div className="card-body lg:space-y-4 px-0 lg:px-8 lg:py-0">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <span>{author}</span>
                    <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-[#23BE0A] font-medium">
                        <li className="text-black font-bold">Tag: </li>
                        {
                            tags.map((tag, idx) => <li key={idx}>#{tag}</li>)
                        }
                        <li className="flex items-center gap-2 text-[#131313CC]"><CiLocationOn/> Year of Publishing: {yearOfPublishing}</li>
                    </ul>
                    <div className="flex flex-col lg:flex-row gap-6 mt-3 lg:mt-0">
                        <span className="flex items-center gap-2"><IoPeopleOutline/> Publisher: {publisher}</span>
                        <span className="flex items-center gap-2"><MdOutlineFindInPage/> Page: {totalPages}</span>
                    </div>
                    <div className="divider my-2 w-full"></div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <span className="p-2 rounded-full bg-[#328EFF26] text-[#328EFF] text-center">Category: {category}</span>
                        <span className="p-2 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-center">Rating: {rating}</span>
                        <Link to={`/book/${bookId}`} className="p-2 rounded-full bg-[#23BE0A] text-white text-center">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadedBook.propTypes = {
    read: PropTypes.object
}
export default ReadedBook;