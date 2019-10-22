import React from 'react';


class Book extends React.Component {

  render() {
    console.log(this.props)
  	let myId = this.props.value.id;
  	let myTitle= this.props.value.title;
    let myCategory= this.props.value.category;
    return ( 
            <tr>
              <td>{myId}</td>  
              <td>{myTitle}</td>
              <td>{myCategory}</td>
            </tr>           	
            
    );
  }
}


export default Book;
