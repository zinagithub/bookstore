import React from 'react';
import { connect } from 'react-redux';
import {createBook} from '../actions/index';
import {Categories} from '../constants/constants';
import '../components/App.css';



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
		e.target.reset()
		this.setState({
                title: '',
                category : Categories[0],

        })  
	}
	render(){
		return (
            <div className = 'formBook '>
              <p>ADD NEW BOOK</p>
              <form onSubmit={this.handleSubmit} className = "row">
                  
                  <input type = 'text' name='title'  placeholder="Enter the Book name" 
                  value = {this.state.title} required onChange={this.handleChange} className="col-xs-12 col-sm-5" />
                  <select name='category' onChange={this.handleChange} className="col-xs-12 col-sm-5">
                    { Categories.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
                  </select>
                  <button className = 'btn btn-primary col-xs-12 col-sm-2'>ADD BOOK</button>
              </form>
            </div>
            
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