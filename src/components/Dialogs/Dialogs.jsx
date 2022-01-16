import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsName = (props) => {
    return (
        <div className={classes.dialogs__name + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.dialogs__message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__names}>
                    <DialogsName name='Gats' id='1'/>
                    <DialogsName name='Griffit' id='2'/>
                    <DialogsName name='Kaska' id='3'/>
                    <DialogsName name='Judoy' id='4'/>
                    <DialogsName name='Rikert' id='5'/>
                </div>
                <div className={classes.dialogs__messages}>
                    <Message message='Hi'/>
                    <Message message='Hi, how r u?'/>
                    <Message message="I'm fine" />
                    <Message message='What about u?'/>
                    <Message message='Ye, me too'/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;