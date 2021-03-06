import classes from './Dialogs.module.css';
import DialogsName from "./DialogsName/DialogsName";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map(dialog => <DialogsName name={dialog.name} key={dialog.id}
                                                                      img={dialog.img}/>)


    let messageElements = props.messages.map(message => <Message message={message.message} key={message.id}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__names}>
                    {dialogElements}
                </div>
                <div className={classes.dialogs__messages}>
                    {messageElements}
                </div>
                <div className={classes.addMessage}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}/>
                    <button className={classes.sendButton} onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;