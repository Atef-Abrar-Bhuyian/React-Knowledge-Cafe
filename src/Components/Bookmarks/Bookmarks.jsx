import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 mt-5 bg-purple-300 ml-4 pt-4 rounded-xl space-y-4">
            <div>
                <h2 className='text-xl text-center font-bold'>Total Reading Time: {readingTime} </h2>
            </div>
            <h2 className="text-2xl text-center font-bold"> Bookmarked Blog: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark= {bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;