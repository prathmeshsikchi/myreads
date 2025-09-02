import '../styles/AddBooks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BookComponent from './BookComponent'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddBooks(props){

    const [searchBar, setSearchBar] = useState("")

    const booksArray = searchBar === "" ? [] : (props.books.filter(element => (
        element.book_title.toLowerCase().includes(searchBar.toLowerCase()) ||
        element.author_name.toLowerCase().includes(searchBar.toLowerCase()) ||
        element.isin_number.toLowerCase().includes(searchBar.toLowerCase()) 
    )))

    console.log(props.books[0].book_title.toLowerCase().includes(searchBar.toLowerCase()))

    return(
        <div>
            <div className="SearchHeader">
                <Link to='/'><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:"20px"}}/></Link>
                <input type="text" className="SearchInput" placeholder="Search by Title, Author or ISIN" onChange={(event) => setSearchBar(event.target.value)}/>
            </div>
            <div className='MainBook'>
                {booksArray.map(element => <BookComponent book={element} 
                handleCategoryChange={(id, category)=> props.handleCategoryChange(id, category)} key={props.id}></BookComponent>)}
            </div>
        </div>
    )
}