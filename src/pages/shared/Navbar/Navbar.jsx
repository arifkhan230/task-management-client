import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('Logged Out successfully')

            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })

    }

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-800 text-xl font-bold mr-4" : "text-black text-xl font-bold mr-4"
            }
        >
            Dashboard
        </NavLink>
    </>

    return (
        <div className="navbar max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="drawer flex md:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {
                                navLinks
                            }

                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost text-xl">Task</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className="btn btn-md text-white bg-[#2eca7f] mb-2 hover:bg-[#6610f2]">Logout</button> : <Link to="login" className="btn btn-accent"> Login
                    </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;