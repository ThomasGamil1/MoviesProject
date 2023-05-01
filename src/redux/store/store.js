import { moviesReducer } from '../reducer/movieReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(moviesReducer/*, composeWithDevTools()*/, applyMiddleware(thunk))