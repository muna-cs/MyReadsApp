import PropTypes from "prop-types";
import Book from "./Book";

const ListBooks = ({ Mybooks }) => {
  const ShelfTypes = [{id:'currentlyReading', shelfname:'Currently Reading'},
  {id:'wantToRead', shelfname:'Want To Read'},{id:'read', shelfname:'Read'}]
   
  const showingBooks = (category) =>
      category!==""?Mybooks.filter((c) => c.shelf=== category):Mybooks;

return (
<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            {ShelfTypes.map((st)=>(
              <div key={st.id} className="bookshelf">
                <h2 className="bookshelf-title">{st.shelfname}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {showingBooks(st.id).map((book)=>(
                    <Book key={book.id} book={book}></Book>
                  ))}
                  </ol>
                </div>
              </div>))};
            </div>
          </div>
         
        </div>
);
};

ListBooks.propTypes = {
  Mybooks: PropTypes.array.isRequired,
};
export default ListBooks;
