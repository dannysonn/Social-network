import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendsElement = props.state.dialogsData.map(friend => <Friend name={friend.name} img={friend.img}/>)

    return (
        <div>
            <div className={classes.friends}>
                <h2 className={classes.friends__title}>Friends</h2>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;