import "../styles/BookComponent.css";
// import Image1 from '../assets/Image1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { update } from "../BooksAPI";

export default function BookComponent(props) {
  // console.log(props.book)

  return (
    <div>
      <div
        className="BookImageContainer"
        style={{ backgroundImage: `url(${props.book.image})` }}
      >
        <div className="CategoryButtonContainer">
          <FontAwesomeIcon icon={faAngleDown} />
          <select
            className="CategoryButton"
            onChange={(event) =>
              props.handleCategoryChange(props.book, event.target.value)
            }
          >
            <option disabled>Move to...</option>
            <option value="0">None</option>
            <option
              value="currentlyReading"
              selected={
                props.book.category === "currentlyReading" ? true : false
              }
            >
              Currently Reading
            </option>
            <option
              value="wantToRead"
              selected={props.book.category === "wantToRead" ? true : false}
            >
              Want to Read
            </option>
            <option
              value="read"
              selected={props.book.category === "read" ? true : false}
            >
              Read
            </option>
          </select>
        </div>
      </div>
      <div className="BookTitleContainer">{props.book.book_title}</div>
      <div className="AuthorContainer">{props.book.author_name}</div>
    </div>
  );
}
