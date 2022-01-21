import Post from "./Post/Post";
import classes from './MyPost.module.css';
import React from "react";

const MyPost = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.posts.map(post =>
        <Post message={post.message} likes={post.likes}/>
    );

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button className={classes.addButton} onClick={addPost}>Add post</button>
            </div>
            <div className={classes.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPost;