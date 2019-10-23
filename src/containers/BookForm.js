import React from 'react';


const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 
class BookForm extends React.Component {
	render(){
		return (
            <form>
                  <input name='myInput'  placeholder="Enter the Book name" />
                  <select name='category'>
                    { Categories.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
                  </select>
                  <button>ADD BOOK</button>
            </form>
			);
	}
}
export default BookForm;