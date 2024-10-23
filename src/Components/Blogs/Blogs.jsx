import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
         blogs;
    } ,[])

    

    return (
        <div className="w-11/12 mx-auto md:w-2/3 mt-5">
            <h1 className="text-4xl mb-10">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
    
}

export default Blogs;