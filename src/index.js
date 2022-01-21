import React from 'react';
import './index.css';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

renderEntireTree(state);

subscribe(renderEntireTree);