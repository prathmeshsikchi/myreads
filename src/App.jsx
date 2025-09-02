import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Image1 from './assets/Image1.png'
import Image2 from './assets/Image2.png'
import Image3 from './assets/Image3.png'
import Image4 from './assets/Image4.png'
import Image5 from './assets/Image5.png'
import Image6 from './assets/Image6.png'
import Image7 from './assets/Image7.png'
import Image8 from './assets/Image8.png'
import Image9 from './assets/Image9.png'
import Image10 from './assets/Image10.png'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import AddBooks from './components/AddBooks';

function App() {

  const bookArray = [
  {
    "image": Image1,
    "book_title": "To Kill a Mockingbird",
    "author_name": "Harper Lee",
    "isin_number": "US0000000001",
    "category" : "1",
    "id" : nanoid()
  },
  {
    "image": Image2,
    "book_title": "1984",
    "author_name": "George Orwell",
    "isin_number": "US0000000002",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image3,
    "book_title": "Pride and Prejudice",
    "author_name": "Jane Austen",
    "isin_number": "US0000000003",
    "category" : "3",
    "id" : nanoid()
  },
  {
    "image": Image4,
    "book_title": "The Great Gatsby",
    "author_name": "F. Scott Fitzgerald",
    "isin_number": "US0000000004",
    "category" : "1",
    "id" : nanoid()
  },
  {
    "image": Image5,
    "book_title": "Moby-Dick",
    "author_name": "Herman Melville",
    "isin_number": "US0000000005",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image6,
    "book_title": "War and Peace",
    "author_name": "Leo Tolstoy",
    "isin_number": "US0000000006",
    "category" : "3",
    "id" : nanoid()
  },
  {
    "image": Image7,
    "book_title": "The Catcher in the Rye",
    "author_name": "J.D. Salinger",
    "isin_number": "US0000000007",
    "category" : "1",
    "id" : nanoid()
  },
  {
    "image": Image8,
    "book_title": "The Hobbit",
    "author_name": "J.R.R. Tolkien",
    "isin_number": "US0000000008",
    "category" : "1",
    "id" : nanoid()
  },
  {
    "image": Image9,
    "book_title": "Fahrenheit 451",
    "author_name": "Ray Bradbury",
    "isin_number": "US0000000009",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image10,
    "book_title": "Jane Eyre",
    "author_name": "Charlotte Brontë",
    "isin_number": "US0000000010",
    "category" : "3",
    "id" : nanoid()
  },
  {
    "image": Image1,
    "book_title": "Brave New World",
    "author_name": "Aldous Huxley",
    "isin_number": "US0000000011",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image2,
    "book_title": "Crime and Punishment",
    "author_name": "Fyodor Dostoevsky",
    "isin_number": "US0000000012",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image3,
    "book_title": "The Odyssey",
    "author_name": "Homer",
    "isin_number": "US0000000013",
    "category" : "2",
    "id" : nanoid()
  },
  {
    "image": Image4,
    "book_title": "Wuthering Heights",
    "author_name": "Emily Brontë",
    "isin_number": "US0000000014",
    "category" : "3",
    "id" : nanoid()
  },
  {
    "image": Image5,
    "book_title": "Anna Karenina",
    "author_name": "Leo Tolstoy",
    "isin_number": "US0000000015",
    "category" : "0",
    "id" : nanoid()
  },
  {
    "image": Image6,
    "book_title": "The Divine Comedy",
    "author_name": "Dante Alighieri",
    "isin_number": "US0000000016",
    "category" : "0",
    "id" : nanoid()
  },
  {
    "image": Image7,
    "book_title": "Don Quixote",
    "author_name": "Miguel de Cervantes",
    "isin_number": "US0000000017",
    "category" : "0",
    "id" : nanoid()
  },
  {
    "image": Image8,
    "book_title": "The Brothers Karamazov",
    "author_name": "Fyodor Dostoevsky",
    "isin_number": "US0000000018",
    "category" : "0",
    "id" : nanoid()
  },
  {
    "image": Image9,
    "book_title": "Les Misérables",
    "author_name": "Victor Hugo",
    "isin_number": "US0000000019",
    "category" : "0",
    "id" : nanoid()
  },
  {
    "image": Image10,
    "book_title": "The Iliad",
    "author_name": "Homer",
    "isin_number": "US0000000020",
    "category" : "0",
    "id" : nanoid()
  }
]

const [booksInformation, setBooksInformation] = useState(bookArray)

function changeCategory(id, category){
  setBooksInformation(prev => prev.map(
    element => element.id === id ? {...element, category : category} : element
  ))
}


  return (
    <Routes>
      <Route path='/' element={<HomePage books={booksInformation} 
      handleCategoryChange={(id, category)=> changeCategory(id, category)}/>}></Route>
      <Route path='/AddBooks' element={<AddBooks></AddBooks>}></Route>
    </Routes>
  );
}

export default App;
