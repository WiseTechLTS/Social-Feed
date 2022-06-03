// import needed dependencies
import './NavBar.css';
import { NavBar } from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <NavBar bg="info" variant="dark">
            <h3><small className="text-musted">void</small>screams</h3>
        </NavBar>
    );
}
// export our Navbar prop
export default NavBar;