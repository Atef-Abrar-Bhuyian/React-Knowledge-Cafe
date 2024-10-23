import { useEffect, useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
    } , [])

    const handleBlogs = () =>{
        console.log(data)
    }

    return (
        <div>
            {
                Total Blogs: {blogs.length}
            }
        </div>
    );
};

export default Blogs;