import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
function NavBar() {
    return (
        <nav id="navbar" className="navbar">
            <Link className="brand" to="/">Brand</Link>
            <ul className="nav">
                {/* <li className="nav-list">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-list">
                    <Link to="/about">About</Link>
                </li> */}

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                    Home
                </NavLink>
                <NavLink
                    to="/todo"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                    Todo list
                </NavLink>
                <NavLink
                    to="/story"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                    Epic story
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar