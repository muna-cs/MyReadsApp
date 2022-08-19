import PropTypes from 'prop-types';
import * as BooksAPI from "../BooksAPI"

const BookShelf = ({ book, shelfType }) => {
  const updateShelf = (Upbook,shelf) => {
      BooksAPI.update(Upbook, shelf);
  };

   const handleChange = (e) => {
    e.preventDefault();
     updateShelf(book,e.target.value);
  };

return(
    <div className="book-shelf-changer">
    <select onChange={handleChange} value={shelfType} >
      <option  disabled>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>

);

};

BookShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelfType: PropTypes.string.isRequired
};
export default BookShelf;
