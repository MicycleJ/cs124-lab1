import './Header.css';
import Menu from "./Menu"

function Header(props) {
    return (
        <div id="Header">
            <h1> To Do List </h1>
            <Menu
                toggleCompletedDisplay = {props.toggleCompletedDisplay}
                completedDisplay = {props.completedDisplay}
            ></Menu>
        </div>);
}

export default Header;