import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const Book = ({ book }) => {
return(
    <li >
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
            `url(${book.imageLinks&&book.imageLinks.thumbnail})`,
          }}
        ></div>
       <BookShelf book={book} shelfType={book.shelf}></BookShelf>

      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.Link}</div>
    </div>
  </li>

)};

Book.propTypes = {
    book: PropTypes.object.isRequired,
  };
export default Book;
