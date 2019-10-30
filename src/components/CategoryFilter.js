import React from 'react';
import {Categories} from '../constants/constants';
import './App.css';

let categ = ['All'].concat(Categories);


class CategoryFilter extends React.Component {
	render() {
		let handleFilterChange = this.props.filterProp;
      return (
			<div className = 'categFilter'>
			   <select name='categFilter' onChange = {(e) => handleFilterChange(e.target.value)}>
                    { categ.map((cat) => (<option  value={cat} key={cat} > {cat} </option>)) }
                </select>
			</div>
	    )
	}
}


		

export default CategoryFilter;