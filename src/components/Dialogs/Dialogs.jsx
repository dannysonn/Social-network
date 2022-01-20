import classes from './Dialogs.module.css';
import DialogsName from "./DialogsName/DialogsName";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogsName name={dialog.name} id={dialog.id} img={dialog.img}/>)


    let messageElements = props.state.messages.map(message => <Message message={message.message}/>)

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