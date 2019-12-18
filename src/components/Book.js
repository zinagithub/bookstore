import React from 'react';
import './App.css';

class Book extends React.Component {

  render() {
  	let myId = this.props.value.id;
  	let myTitle= this.props.value.title;
    let myCategory= this.props.value.category;
    let clickHandler = this.props.handleRemoveBook;
    return ( 
            <tr className = "row">
              {/*<td className='col-xs-1'>{myId}</td> */} 
              <td className='col-xs-4'>{myTitle}</td>
              <td className='col-xs-2'>{myCategory}</td>
              <td className='col-xs-1'><div className = 'progress'><p>60%</p></div></td>
              <td className='col-xs-5'><button onClick={() => clickHandler(myId)} className = 'btn btn-primary'>DELETE</button></td>
            </tr>           	
            
    );
  }
}


export default Book;
