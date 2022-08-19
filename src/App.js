import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ListBooks from "./Components/ListBooks";
import SearchBook from "./Components/SearchBook";
import * as BooksAPI from "./BooksAPI"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);


 
  return (
     <div className="app">
   
    <Routes>
      <Route
        exact
        path="/"
        element={showSearchPage ? 
       (<SearchBook Mybooks={books} OnsetShowSearchpage={setShowSearchpage} ></SearchBook>)
       : (<div><ListBooks Mybooks={books} OnGetBooks={getBooks()}></ListBooks>
       <div className="open-search">
        <Link to="/" onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</Link></div>
       </div>
       )
      }
      />
   
    </Routes>
    
    </div>
  );
}

export default App;
