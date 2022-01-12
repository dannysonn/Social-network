import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img className={classes.profile__background} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8f32bc123453083.60eebc66ae6fd.jpg" alt=""/>
        </div>
        <div>
            avatar + descr
        </div>
        <MyPost />
    </div>);
}

export default Profile;