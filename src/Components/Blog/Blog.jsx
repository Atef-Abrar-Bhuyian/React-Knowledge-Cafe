import PropTypes from "prop-types";
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({ blog , handleAddToBookmark, handleMarkAsRead }) => {
  const { title, cover, author, posted_date, reading_time, author_img, hashtags } =
    blog;

  return (
    <div className="mb-20">
      <img className="w-10/12 md:w-4/5 rounded-xl mb-8" src={cover} alt={`Cover Picture Of the Title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
            <img className="w-12 md:w-14 rounded-xl" src={author_img} alt="" />
            <div className="ml-6">
                <h3 className="text-2xl">{author} </h3>
                <p>{posted_date}</p>
            </div>
        </div>
        <div >
            <span>{reading_time} Min Read</span>
            <button onClick={()=> handleAddToBookmark(blog)} className="ml-2 text-lg"><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span key={idx}><a className="pl-2 text-gray-600" href="">{hash}</a></span>)
        }
      </p>

      <button className="mt-2 text-purple-600" onClick={()=> handleMarkAsRead(reading_time)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};
export default Blog;
