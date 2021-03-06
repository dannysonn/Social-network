import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
                <img
                    src="https://img2.freepng.ru/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg"
                    alt=""/>
                <span className={classes.message}>{props.message}</span>
            <div>
                <button className={classes.like}><i className="fas fa-heart"></i> like</button>
                {props.likes}</div>
        </div>


    );
}

export default Post;