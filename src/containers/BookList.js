import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';
import {removeBook, changeFilter} from '../actions/index';
import CategoryFilter from '../components/CategoryFilter'
import '../components/App.css';

class BookList extends React.Component {
	
  render (){
    let arrBook  = this.props.mybooks;
    let filterBook = this.props.myFilter;
    if (filterBook !== 'All'){
    	arrBook = arrBook.filter(book => book.category === filterBook)
    }
    return (
    	<div>
    	    <CategoryFilter filterProp = {this.props.selectFilter} />
	    	<table>
	    	       <tbody>
	    	       <tr>
	                  <th>ID</th>
	                  <th>TITLE</th>
	                  <th>CATEGORY</th>
	                </tr>
	    	       {
	    	       	arrBook.map((elm) => {
	    	       	 return (<Book key = {elm.id} value = {elm} 
	    	       	 	      handleRemoveBook = {this.props.delItem} />)
	    	       })}
	               </tbody>
	    	</table>
    	</div>   );
  }
}


const mapStateToProps = state => {
  return {
  	mybooks: state.books,
  	myFilter : state.filter
  }	
}

const mapDispatchToProps = dispatch => {
  return {
    delItem: (id) => {
      dispatch(removeBook(id))
    },
    selectFilter: (f) => {
    	dispatch(changeFilter(f))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList)