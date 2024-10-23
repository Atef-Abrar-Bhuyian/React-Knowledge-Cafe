import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
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
