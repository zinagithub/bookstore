const initState = {
	books : [
	{
		id : 1,
		title : 'book1',
	    category: 'cat1'
	},
	{
		id : 2,
		title : 'book2',
	    category: 'cat2'
	}
	]
}
const booksReducer = (state = initState, action)  => {
    /*switch (action.type) {
    case CREATE_BOOK:
      return []
    case REMOVE_BOOK:
      return []
    default:
      return state
  }*/
  return state
}
export default booksReducer;