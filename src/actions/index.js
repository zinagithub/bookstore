 export const REMOVE_BOOK = 'REMOVE_BOOK'
 export const CREATE_BOOK = 'CREATE_BOOK'


const generateId = () => Math.round(Math.random() * 1000).toString();

export const createBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  book: {
    id: generateId(),
    title,
    category
  }
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id
});