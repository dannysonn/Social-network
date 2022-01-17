import classes from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={classes.dialogs__message}>
            {props.message}
        </div>
    );
}

export default Message;