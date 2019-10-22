import React from 'react';
import ReactDOM from 'react-dom';
import booksReducer from './reducers/books';
import './index.css';
import App from './components/App';

import { createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(booksReducer);

ReactDOM.render(
	<Provider store = {store} >
       <App />
    </Provider>, 
    document.getElementById('root'));


