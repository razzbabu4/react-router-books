import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png'
const Home = () => {
    return (
        <div className="px-4 lg:px-24 lg:mt-8">
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-xl lg:px-20">
                <div className="container flex flex-col-reverse justify-center p-2 mx-auto lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-lg lg:text-left">
                        <h1 className="my-4 text-2xl lg:text-5xl font-bold leading-10">Books to freshen up your bookshelf
                        </h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start lg:mt-8">
                            <Link to='/booklists' rel="noopener noreferrer" className="mt-4 lg:px-8 lg:py-3 p-2 lg:text-lg font-semibold rounded bg-[#23BE0A]  text-white">View The List</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 my-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;