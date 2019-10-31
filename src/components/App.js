import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Header from './Header'
import './App.css';

function App() {
  return (
    //<div className='panel-bg'>
    <div className='panel-bg'>
      <Header />
      <BookList />
      <BookForm />     
    </div>
  );
}

export default App;
