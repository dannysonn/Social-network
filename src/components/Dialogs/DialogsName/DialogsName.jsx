import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsName = (props) => {
    return (
        <div className={classes.dialogs__name + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsName;