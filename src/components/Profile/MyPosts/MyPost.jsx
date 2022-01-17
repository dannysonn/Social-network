import Post from "./Post/Post";
import classes from './MyPost.module.css';

const MyPost = () => {

    let posts = [
        {id: 1, message: 'Hi, how are u?', likes: 3},
        {id: 2, message: `It's my first post`, likes: 5},
    ];

    let postElements = posts.map(post =>
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