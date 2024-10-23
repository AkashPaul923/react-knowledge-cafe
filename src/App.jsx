import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTime , setReadTime] = useState(0)

  const handleAddToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time , id) => {
    setReadTime(readTime + time)
    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reaminingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
