import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (<div>
        <ProfileInfo/>
        <MyPost />
    </div>);
}

export default Profile;