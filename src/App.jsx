import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the bookmark blog from Bookmarks if mark as read clicked
    const newBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(newBookMarks);
  };

  const handleAddToBookmark = (blog) => {

    const isExists = bookmarks.find(b => b.id === blog.id);

    if(isExists){
      alert("Already BookMarked!!!");
    }
    else{
      const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex md:max-w-6xl mx-auto ">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
