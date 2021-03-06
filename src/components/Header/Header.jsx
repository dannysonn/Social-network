import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={classes.header}>
        <img
            src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
            alt=""/>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}

export default Header;