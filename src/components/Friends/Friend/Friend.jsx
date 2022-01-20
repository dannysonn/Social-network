import classes from "../Friends.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friends__item}>
            <img
                src={props.img}
                alt=""/>
            {props.name}
        </div>
    );
}

export default Friend;