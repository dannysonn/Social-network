import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.profile__background}
                     src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8f32bc123453083.60eebc66ae6fd.jpg"
                     alt=""/>
            </div>
            <div className={classes.profile__description}>
                <img src={props.profile.photos.large} alt=""/>
                <div className="contacts">
                    My name is: {props.profile.fullName}
                </div>
                avatar + descr
            </div>
        </div>
    );
}

export default ProfileInfo;