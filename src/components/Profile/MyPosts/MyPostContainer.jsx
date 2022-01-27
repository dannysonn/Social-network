import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

// const MyPostContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updatePostActionCreator(text);
//                     store.dispatch(action);
//                 }
//
//                 return <MyPost updateNewPostText={onPostChange}
//                                addPost={addPost}
//                                posts={state.profilePage.posts}
//                                newPostText={state.profilePage.newPostText}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updatePostActionCreator(text);
            dispatch(action);
        },

        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;