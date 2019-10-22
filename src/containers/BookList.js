import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';
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
    	       {this.props.mybooks.map((elm, index) => {
    	       	 return (<Book key = {index} value = {elm} />)
    	       })}
               </tbody>
    	   </table>);
  }
}


const mapStateToProps = state => {
  return {
  	mybooks: state.books
  }	
}
export default connect(mapStateToProps)(BookList)