import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://yt3.ggpht.com/a/AATXAJz6ECS2G5xatk4a40PH0npLhbnhhM3WPKPe4HvDdA=s900-c-k-c0xffffffff-no-rj-mo',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://yt3.ggpht.com/a/AATXAJzHABAsEU9bPjD9m-Kr6RqEmOqIXc0Lq7P8IWnMxA=s900-c-k-c0x00ffffff-no-rj',
                    followed: true,
                    fullName: 'Oleg',
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://pbs.twimg.com/media/EvCaX6GXIAQWn0V.jpg',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }


    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.user__photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>);
}

export default Users;