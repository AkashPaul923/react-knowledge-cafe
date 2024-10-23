import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            
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
    bookmarks: PropTypes.array
}
export default Bookmarks;