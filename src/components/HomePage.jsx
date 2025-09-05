import '../styles/HomePage.css'
import BookComponent from './BookComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function HomePage(props){
    // console.log(props.books[0].image)
    const currentlyReadingArray = props.books.filter(element => element.category === 'currentlyReading');
    // console.log(currentlyReadingArray.length)
    const wantToReadArray = props.books.filter(element => element.category === 'wantToRead');
    const readArray = props.books.filter(element => element.category === 'read');

    return(
        <div>
            <div className='Header'>
                <h1>MyReads</h1>
            </div>
            <div className='MainContainer'>
                <div>
                    <div className='CategoryHeading'>Currently Reading</div>
                    <div className='BooksContainer'>
                        {currentlyReadingArray.map(element => <BookComponent book={element} 
                        handleCategoryChange={(id, category)=> props.handleCategoryChange(id, category)} key={props.id}></BookComponent>)}
                    </div>
                </div>
                <div>
                    <div className='CategoryHeading'>Want to Read</div>
                    <div className='BooksContainer'>
                        {wantToReadArray.map(element => <BookComponent book={element}
                        handleCategoryChange={(id, category)=> props.handleCategoryChange(id, category)} key={props.id}></BookComponent>)}
                    </div>
                </div>
                <div>
                    <div className='CategoryHeading'>Read</div>
                    <div className='BooksContainer'>
                        {readArray.map(element => <BookComponent book={element}
                        handleCategoryChange={(id, category)=> props.handleCategoryChange(id, category)} key={props.id}></BookComponent>)}
                    </div>
                </div>
                <Link to='/AddBooks'>
                    <div className='SearchButton'>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </Link>
            </div>
        </div>
    )
}