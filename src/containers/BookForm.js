import React from 'react';


const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'] 
class BookForm extends React.Component {
	state = {
		title : '',
		category : Categories[0],
	}
	handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
	}
	render(){
		return (
            <form>
                  <h1>input : {this.state.title} category : {this.state.category}</h1>
                  <input type = 'text' name='title'  placeholder="Enter the Book name" onChange={this.handleChange}/>
                  <select name='category' onChange={this.handleChange}>
                    { Categories.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
                  </select>
                  <button>ADD BOOK</button>
            </form>
			);
	}
}
export default BookForm;