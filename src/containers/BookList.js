import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux'

class BookList extends React.Component {
	
  render (){
  	
    return (<table>
    	       <tbody>
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