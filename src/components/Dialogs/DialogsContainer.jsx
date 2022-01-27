import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateMessageActionCreator(text);
                    store.dispatch(action);
                }

                return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageText}
                                dialogsData={state.dialogsPage.dialogsData}
                />
            }
        }
        </StoreContext.Consumer>
    );

}

export default DialogsContainer;