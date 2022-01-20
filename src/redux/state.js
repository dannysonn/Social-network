import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are u?', likes: 3},
            {id: 2, message: `It's my first post`, likes: 5},
        ],
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, message: postMessage, likes: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;