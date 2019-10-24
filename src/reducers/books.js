import {CREATE_BOOK, REMOVE_BOOK } from '../actions/index'
const initState = {
books : [
	{
		id : '1',
		title : 'book1',
	    category: 'Sci-Fi'
	},
	{
		id : '2',
		title : 'book2',
	    category: 'Action'
	},
	]
}
const booksReducer = (state = initState.books, action)  => {
    switch (action.type) {
    case CREATE_BOOK:
        //state.books = [...state.books, action.book]
        //console.log('books :',state.books)
        return [...state, action.book];
       
    case REMOVE_BOOK:
        //state.books = state.books.filter(book => book.id !== action.id);
        return state.filter(book => book.id !== action.id);
    default:
      return state
  }
}
export default booksReducer;