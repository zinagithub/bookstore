import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
