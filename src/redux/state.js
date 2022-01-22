const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
    _callSubscriber() {
        console.log('State changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likes: 3},
                {id: 2, message: `It's my first post`, likes: 5},
            ],
            newPostText: 'add post',
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Gats',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhipufy40dQ0FtTAbXTHXl3MvjMf-y-UFJMQ&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Griffit',
                    img: 'https://avatars.mds.yandex.net/get-zen_doc/3965742/pub_601bf024d496d26713e43c5f_601bf0e3d496d26713e5edf1/scale_1200'
                },
                {id: 3, name: 'Kaska', img: 'https://media.kg-portal.ru/anime/b/berserk/images/berserk_184s.jpg'},
                {
                    id: 4,
                    name: 'Judoy',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2xMjtD--Kq3S3czy8FP38ohcJN8n54qAMYl7n2arEcu0We-4BbN6W4EZ9vNfSNe0mlI&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Rikert',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPZ5rLg2eN9_fkSvBnsmOLA05LGvAfsyeFhxk-MRj5idNlieRrRxPYwI_wVIBtPTsjlo&usqp=CAU'
                },
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi, how are u?'},
                {id: 3, message: 'I\'m fine'},
                {id: 4, message: 'What about u?'},
                {id: 5, message: 'Ye, me too'},
            ],
            newMessageText: 'send message',
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Gats',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhipufy40dQ0FtTAbXTHXl3MvjMf-y-UFJMQ&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Griffit',
                    img: 'https://avatars.mds.yandex.net/get-zen_doc/3965742/pub_601bf024d496d26713e43c5f_601bf0e3d496d26713e5edf1/scale_1200'
                },
                {id: 3, name: 'Kaska', img: 'https://media.kg-portal.ru/anime/b/berserk/images/berserk_184s.jpg'},
            ]
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_POST) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber();
        }

    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newPostText: text,
    };
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newMessageText: text,
    };
}

export default store;