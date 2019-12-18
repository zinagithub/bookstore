import React from 'react';
import './App.css';
import SVG1 from './svg-logo';


const Header = () => {
  return (
    <div className='headerBookStore row'>
      <SVG1 />
      <div className='title col-xs-6'>Bookstore CMS</div>
      {/*<div className='books'>Books</div>
      <div className='Category'>Categories</div>*/}
    </div>
  );
};

export default Header;