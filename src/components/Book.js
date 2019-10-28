import React from 'react';
import './App.css';

class Book extends React.Component {

  render() {
  	let myId = this.props.value.id;
  	let myTitle= this.props.value.title;
    let myCategory= this.props.value.category;
    let clickHandler = this.props.handleRemoveBook;
    return ( 
            <tr className = "row-Panel">
              <td>{myId}</td>  
              <td>{myTitle}</td>
              <td>{myCategory}</td>
              <td><div className = 'progress'><p>60%</p></div></td>
              <td><button onClick={() => clickHandler(myId)}>DELETE</button></td>
            </tr>           	
            
    );
  }
}


export default Book;
