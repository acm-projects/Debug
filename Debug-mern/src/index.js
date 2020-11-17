import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./style/index.css"

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp( {
  apiKey: "AIzaSyAbogvTFs1LB7qP5u46TAC5nNO3MY0kqXQ",
  authDomain: "debug-mern.firebaseapp.com",
  databaseURL: "https://debug-mern.firebaseio.com",
  projectId: "debug-mern",
  storageBucket: "debug-mern.appspot.com",
  messagingSenderId: "676764415415",
  appId: "1:676764415415:web:4e9a77c2bf87b5255d2432",
  measurementId: "G-4FJHZ9GQYN"
});

ReactDOM.render(<App />, document.getElementById('debug-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
