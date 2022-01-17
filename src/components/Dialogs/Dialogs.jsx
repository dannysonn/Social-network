import classes from './Dialogs.module.css';
import DialogsName from "./DialogsName/DialogsName";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map(dialog => <DialogsName name={dialog.name} id={dialog.id}/>)


    let messageElements = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__names}>
                    {dialogElements}
                </div>
                <div className={classes.dialogs__messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;