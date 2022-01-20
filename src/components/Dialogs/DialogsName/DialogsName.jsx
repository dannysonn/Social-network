import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsName = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}>
                <div>
                    <img className={classes.dialogs__img} src={props.img} alt=""/>
                    <span className={classes.dialogs__name}>{props.name}</span>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogsName;