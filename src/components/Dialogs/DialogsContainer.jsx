import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageText}
                     dialogsData={state.dialogsPage.dialogsData}
    />);

}

export default DialogsContainer;