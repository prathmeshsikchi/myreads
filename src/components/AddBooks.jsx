import "../styles/AddBooks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BookComponent from "./BookComponent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

export default function AddBooks(props) {
  const [searchBar, setSearchBar] = useState("");

  const [booksArray, setBookArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //   let element = <></>;

  // searchBar === ""
  //   ? []
  //   : props.books.filter(
  //       (element) =>
  //         element.book_title
  //           .toLowerCase()
  //           .includes(searchBar.toLowerCase()) ||
  //         element.author_name
  //           .toLowerCase()
  //           .includes(searchBar.toLowerCase()) ||
  //         element.isin_number.toLowerCase().includes(searchBar.toLowerCase())
  //     );

  useEffect(() => {
    if (searchBar !== "") {
      search(searchBar).then((data) => {
        console.log(data);

        const tempArray = data.map((element) => ({
          image: element.imageLinks.smallThumbnail,
          book_title: element.title,
          author_name: Array.isArray(element.authors)
            ? element.authors.join(",")
            : "",
          isin_number: element.industryIdentifiers[0].identifier,
          category: element.shelf,
          id: element.id,
        }));
        console.log(data);
        setBookArray(tempArray);
        setIsLoaded(true);

        //   element =
      });
    }
  }, [searchBar]);

  console.log(
    props.books[0].book_title.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div>
      <div className="SearchHeader">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "20px" }} />
        </Link>
        <input
          type="text"
          className="SearchInput"
          placeholder="Search by Title, Author or ISIN"
          onChange={(event) => {
            setSearchBar(event.target.value);
            setIsLoaded(false);
          }}
        />
      </div>
      <div className="MainBook">
        {isLoaded ? (
          booksArray.map((element) => (
            <BookComponent
              book={element}
              handleCategoryChange={(id, category) =>
                props.handleCategoryChange(id, category)
              }
              key={props.id}
            ></BookComponent>
          ))
        ) : searchBar !== "" ? (
          <div className="loaderDiv">
            <div className="loader"></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
