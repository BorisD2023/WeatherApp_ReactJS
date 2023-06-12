import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <nav>
                <NavLink to="/">Düsseldorf</NavLink>
                <NavLink to="/köln">Köln</NavLink>
                <NavLink to="/berlin">Berlin</NavLink>
                <NavLink to="/hamburg">Hamburg</NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;