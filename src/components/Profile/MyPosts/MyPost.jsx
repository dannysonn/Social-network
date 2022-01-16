import Post from "./Post/Post";
import classes from './MyPost.module.css';

const MyPost = () => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.post}>
                <Post message='Hi, how are u?' likes='3'/>
                <Post message={`It's my first post`} likes='5'/>
            </div>
        </div>
    );
}

export default MyPost;