import classes from './Dialogs.module.css';
import DialogsName from "./DialogsName/DialogsName";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogsName name={dialog.name} id={dialog.id} img={dialog.img}/>)


    let messageElements = props.state.messages.map(message => <Message message={message.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
        newMessage.current.value = '';
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
                    <textarea ref={newMessage}></textarea>
                    <button className={classes.sendButton} onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;