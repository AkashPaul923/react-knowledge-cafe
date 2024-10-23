import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks ,readTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='text-center p-5 bg-violet-100 border-2 border-violet-600 rounded-lg my-8'>
                <p className='text-2xl font-bold text-violet-600'>Spent Time on Read: {readTime} Min</p>
            </div>
            <div className='p-8 bg-gray-100 rounded-lg'>
            <h1 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}
export default Bookmarks;