import PropTypes from 'prop-types';
const BookCard = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl p-6 border">
                <figure><img className='h-60 w-full' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="books" /></figure>
                <div className="card-body px-0 pb-2">
                    <ul className="flex gap-6 text-[#23BE0A] font-medium text-lg">
                        {
                            tags.map((tag, idx) => <li key={idx}>{tag}</li>)
                        }
                    </ul>
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                        <span>{category}</span>
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}
export default BookCard;