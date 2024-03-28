
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredBookData } from '../utility/localstorage';



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesRead = () => {
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
    <div className="px-4 lg:px-24 lg:mt-8">
      <div className='chart-container w-full h-72 lg:h-[500px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={readed}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='bookName' />
            <YAxis />
            <Bar dataKey='totalPages' fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {readed.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesRead;