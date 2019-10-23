import {CREATE_BOOK, REMOVE_BOOK } from '../actions/index'
const initState = {
	books : [
	{
		id : 1,
		title : 'book1',
	    category: 'Sci-Fi'
	},
	{
		id : 2,
		title : 'book2',
	    category: 'Action'
	}
	]
}
const booksReducer = (state = initState, action)  => {
    switch (action.type) {
    case CREATE_BOOK:
        return [...state, action.book];
    case REMOVE_BOOK:
        return state.filter(book => book.id !== action.id);
    default:
      return state
  }
}
export default booksReducer;