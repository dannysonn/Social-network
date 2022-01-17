import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Gats'},
    {id: 2, name: 'Griffit'},
    {id: 3, name: 'Kaska'},
    {id: 4, name: 'Judoy'},
    {id: 5, name: 'Rikert'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi, how are u?'},
    {id: 3, message: 'I\'m fine'},
    {id: 4, message: 'What about u?'},
    {id: 5, message: 'Ye, me too'},
]

let posts = [
    {id: 1, message: 'Hi, how are u?', likes: 3},
    {id: 2, message: `It's my first post`, likes: 5},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
