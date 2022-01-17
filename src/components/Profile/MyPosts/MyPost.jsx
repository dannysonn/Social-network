import Post from "./Post/Post";
import classes from './MyPost.module.css';

const MyPost = (props) => {


    let postElements = props.posts.map(post =>
        <Post message={post.message} likes={post.likes}/>
    );

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPost;