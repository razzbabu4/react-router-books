import { NavLink } from "react-router-dom";
// import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="navbar bg-white px-4 lg:px-24 lg:pt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/booklists'>Listed Books</NavLink>
                        </li>
                        <li>
                            <NavLink to='/pages-read'>Pages to Read</NavLink>
                        </li>
                        <li>
                            <a>Sign in</a>
                        </li>
                        <li>
                            <a>Sign up</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Nest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-[#131313CC] text-lg font-semibold">
                    <li>
                        <NavLink to='/' style={({ isActive}) => {
                            return {
                                backgroundColor: isActive ? "white" : "",
                                border: isActive ? "1px solid green" : "",
                                color: isActive ? "#23BE0A" : "",
                            };
                        }}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/booklists' style={({ isActive}) => {
                            return {
                                backgroundColor: isActive ? "white" : "",
                                border: isActive ? "1px solid green" : "",
                                color: isActive ? "#23BE0A" : "",
                            };
                        }}> Listed Books</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pages-read' style={({ isActive}) => {
                            return {
                                backgroundColor: isActive ? "white" : "",
                                border: isActive ? "1px solid green" : "",
                                color: isActive ? "#23BE0A" : "",
                            };
                        }}>Pages to Read</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' style={({ isActive}) => {
                            return {
                                backgroundColor: isActive ? "white" : "",
                                border: isActive ? "1px solid green" : "",
                                color: isActive ? "#23BE0A" : "",
                            };
                        }}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' style={({ isActive}) => {
                            return {
                                backgroundColor: isActive ? "white" : "",
                                border: isActive ? "1px solid green" : "",
                                color: isActive ? "#23BE0A" : "",
                            };
                        }}>About Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end lg:flex gap-4 hidden">
                <button className="btn text-lg font-semibold text-white bg-[#23BE0A] border-none">Sign In</button>
                <button className="btn text-lg font-semibold text-white bg-[#59C6D2] border-none">Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;