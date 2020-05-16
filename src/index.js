import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import './index.css';
import inputsReducer from './store/inputs';
import notesReducer from './store/notes';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { saveState, loadState } from './store/storeServices';


const rootReducer = combineReducers({
  inputs: inputsReducer,
  notes: notesReducer
})

const logger = createLogger();
const persistState = loadState();

const store = createStore(rootReducer, persistState, applyMiddleware(logger));

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
