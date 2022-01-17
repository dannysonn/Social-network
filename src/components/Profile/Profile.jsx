import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (<div>
        <ProfileInfo/>
        <MyPost posts={props.posts}/>
    </div>);
}

export default Profile;