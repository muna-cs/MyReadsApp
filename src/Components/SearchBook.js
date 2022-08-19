import { useState } from "react";
import PropTypes from "prop-types";
import {  Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book";


const SearchBook = ({  Mybooks,OnsetShowSearchpage }) => {
    const [result,setResult]=useState([]);
        const updateQuery = async (query) => {
           if(query!=="")
           {
             await BooksAPI.search(query).then((Books) => {
            if (Books.length > 0) {
              Books.forEach((el) => {
                const bookIn= Mybooks.filter(mybook=>  mybook.id === el.id);
                if(bookIn.length > 0){
                  console.log(bookIn.length );
                  el.shelf=bookIn[0].shelf;
                }
                else
                {
                el.shelf='none'
              }
              });
              setResult(Books);
            }
            else{
              setResult(null);
            }
          });
        }
        else
        {
          setResult(null);
        }
      };

return(
  
    <div className="search-books">
    <div className="search-books-bar">
    <Link to="/"
        className="close-search"
        onClick={() => OnsetShowSearchpage(false)}
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text" 
          placeholder="Search by title, author, or ISBN"
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {result !== null ? (result.map((book)=>(
         <Book key={book.id} book={book}></Book>
       ))):(<li>NOT EXIST</li>)}
      </ol>
    </div>
  </div>
);
}

SearchBook.propTypes = {
  Mybooks: PropTypes.array.isRequired,
  OnsetShowSearchpage: PropTypes.func.isRequired
};

export default SearchBook;

