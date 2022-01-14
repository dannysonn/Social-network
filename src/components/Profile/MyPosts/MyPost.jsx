import classes from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            My posts

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