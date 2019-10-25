import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';
import {removeBook} from '../actions/index';
import '../components/App.css';

class BookList extends React.Component {
	
  render (){
    return (<table>
    	       <tbody>
    	       <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>CATEGORY</th>
                </tr>
    	       {this.props.mybooks.map((elm) => {
    	       	 return (<Book key = {elm.id} value = {elm} 
    	       	 	      handleRemoveBook = {this.props.delItem} />)
    	       })}
               </tbody>
    	   </table>);
  }
}


const mapStateToProps = state => {
  return {
  	mybooks: state
  }	
}

const mapDispatchToProps = dispatch => {
  return {
    delItem: (id) => {
      dispatch(removeBook(id))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList)