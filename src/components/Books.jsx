import { useLoaderData } from 'react-router-dom';
import BookCard from '../components/BookCard';

const Books = () => {
    const books = useLoaderData()
    return (
        <div>
            <section className='lg: mt-20'>
                <div className='text-center text-5xl font-bold lg:mb-16'>
                    <h1>Books</h1>
                </div>
                <div className='grid lg:grid-cols-3 gap-6 lg:mb-24'>
                    {
                        books.map(book => <BookCard key={book.bookId} book={book}/>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Books;