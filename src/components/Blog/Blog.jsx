import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark ,handleMarkAsRead}) => {
    const {title, cover,author_img,author,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 p-6 border-b-2'>
            <img className='w-full  border border-solid rounded-lg' src={cover} alt={`pic of ${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-base font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-xl font-medium text-gray-500'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className="my-4 text-4xl font-extrabold">{title}</h2>
            {
                hashtags.map((hashtag, idx) => <span key ={idx}><a className='text-xl font-medium text-gray-400' href=''> #{hashtag} </a></span> )
            }
            <br />
            <button onClick={() =>handleMarkAsRead(reading_time , blog.id)} className='text-xl font-medium text-violet-600 underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;