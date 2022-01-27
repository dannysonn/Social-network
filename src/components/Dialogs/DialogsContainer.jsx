import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//
//                 let state = store.getState();
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//
//                 let onMessageChange = (text) => {
//                     let action = updateMessageActionCreator(text);
//                     store.dispatch(action);
//                 }
//
//                 return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage}
//                                 messages={state.dialogsPage.messages}
//                                 newMessageText={state.dialogsPage.newMessageText}
//                                 dialogsData={state.dialogsPage.dialogsData}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
//
// }

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateMessageActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;