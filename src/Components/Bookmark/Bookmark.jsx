import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-purple-400 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl italic'>{title} </h3>
        </div>
    );
};


Bookmark.propTypes= {
    bookmark: PropTypes.object
}
export default Bookmark;
