const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likes: 3},
        {id: 2, message: `It's my first post`, likes: 5},
    ],
    newPostText: 'add post',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = JSON.parse(JSON.stringify(state));

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        };
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
    } else if (action.type === UPDATE_POST) {
        stateCopy.newPostText = action.newPostText;
    } else if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile}
    }

    return stateCopy;
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}
export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newPostText: text,
    };
}



export default profileReducer;