import React from 'react';
import { connect } from 'react-redux';
import {createBook} from '../actions/index';


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
	handleSubmit = (e) => {
		e.preventDefault();
		const { title, category } = this.state;
		this.props.addItem({ title, category });
		this.setState({
                title: '',
        })  
	}
	render(){
		return (
            <form onSubmit={this.handleSubmit}>
                  
                  <input type = 'text' name='title'  placeholder="Enter the Book name" onChange={this.handleChange}/>
                  <select name='category' onChange={this.handleChange}>
                    { Categories.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
                  </select>
                  <button>ADD BOOK</button>
            </form>
			);
	}
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addItem: (a) => {
      dispatch(createBook(a))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);