import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import AddBooks from "./components/AddBooks";
import { getAll, update } from "./BooksAPI";

function App() {
  let rawData;

  const [booksInformation, setBooksInformation] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [toggle, setToggle] = useState(true);
  // const [routeElement, setRouteElement] = useState(<></>);

  useEffect(() => {
    getAll().then((data) => {
      rawData = data;

      console.log(data);

      const bookArray = rawData.map((element) => ({
        image: element.imageLinks.smallThumbnail,
        book_title: element.title,
        author_name: element.authors.join(","),
        isin_number: element.industryIdentifiers[0].identifier,
        category: element.shelf,
        id: element.id,
      }));

      setBooksInformation(bookArray);
      setIsLoaded(true);
    });
  }, [toggle]);

  function changeCategory(id, category) {
    setIsLoaded(false);

    console.log(id);
    console.log(category);

    update(id, category).then(setToggle((prev) => !prev));

    // setBooksInformation((prev) =>
    //   prev.map((element) =>
    //     element.id === id ? { ...element, category: category } : element
    //   )
    // );
  }

  return (
    <>
      {isLoaded ? (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                books={booksInformation}
                handleCategoryChange={(id, category) =>
                  changeCategory(id, category)
                }
              />
            }
          ></Route>
          <Route
            path="/AddBooks"
            element={
              <AddBooks
                books={booksInformation}
                handleCategoryChange={(id, category) =>
                  changeCategory(id, category)
                }
              ></AddBooks>
            }
          ></Route>
        </Routes>
      ) : (
        <div className="loaderDiv">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default App;
