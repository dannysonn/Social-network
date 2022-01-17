import classes from './Dialogs.module.css';
import DialogsName from "./DialogsName/DialogsName";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Gats'},
        {id: 2, name: 'Griffit'},
        {id: 3, name: 'Kaska'},
        {id: 4, name: 'Judoy'},
        {id: 5, name: 'Rikert'},
    ]

    let dialogElements = dialogsData.map(dialog => <DialogsName name={dialog.name} id={dialog.id}/>)

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how are u?'},
        {id: 3, message: 'I\'m fine'},
        {id: 4, message: 'What about u?'},
        {id: 5, message: 'Ye, me too'},
    ]

    let messageElements = messages.map(message => <Message message={message.message}/>)

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