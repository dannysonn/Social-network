import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from '../Friends/Friends';

const Navbar = (props) => {


    return (<nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' className={({ isActive })=> isActive ? classes.active : ""}>Profile</NavLink>
        </div>
        <div className={`${classes.item}`}>
            <NavLink to="/dialogs" className={({ isActive })=> isActive ? classes.active : ""}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className={({ isActive })=> isActive ? classes.active : ""}>News</NavLink>
        </div>
        <div className={classes.item} >
            <NavLink to='/music' className={({ isActive })=> isActive ? classes.active : ""}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className={({ isActive })=> isActive ? classes.active : ""}>Settings</NavLink>
        </div>
        <Friends state={props.state}/>
    </nav>);
}

export default Navbar;