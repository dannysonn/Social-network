import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updatePostActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPost updateNewPostText={onPostChange}
                               addPost={addPost}
                               posts={state.profilePage.posts}
                               newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostContainer;