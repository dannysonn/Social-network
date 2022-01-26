let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;