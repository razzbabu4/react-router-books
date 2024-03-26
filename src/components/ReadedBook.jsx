import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadedBook = ({ read }) => {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = read
    return (
        <div>
            <div className="card card-side shadow-xl border">
                <figure className='bg-[#faf9f9] m-6'><img className="h-72 w-72 p-6" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    <ul className="flex gap-6 text-[#23BE0A] font-medium mt-4">
                        <li className="text-black font-bold">Tag: </li>
                        {
                            tags.map((tag, idx) => <li key={idx}>#{tag}</li>)
                        }
                        <li className="flex gap-2 text-[#131313CC]"><CiLocationOn/> Year of Publishing: {yearOfPublishing}</li>
                    </ul>
                    <div className="flex gap-6">
                        <span className="flex items-center"><IoPeopleOutline/> Publisher: {publisher}</span>
                        <span className="flex items-center"><MdOutlineFindInPage/> Page: {totalPages}</span>
                    </div>
                    <div className="divider my-2"></div>
                    <div className="flex gap-6">
                        <span className="p-2 rounded-full bg-[#328EFF26] text-[#328EFF]">Category: {category}</span>
                        <span className="p-2 rounded-full bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</span>
                        <Link className="p-2 rounded-full bg-[#23BE0A] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadedBook;