import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover,author_img,author,posted_date,reading_time,hashtags} = blog
    return (
        <div>
            <img src={cover} alt={`pic of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            {
                hashtags.map((hashtag, idx) => <span key ={idx}><a href=''> #{hashtag} </a></span> )
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;