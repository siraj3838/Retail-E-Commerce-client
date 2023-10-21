import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    const { logOutUser, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('log Out Successfully');
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const navLists = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : "text-white"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : "text-white"
            }
        >
            Add Product
        </NavLink>
        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : "text-white"
            }
        >
            My Cart
        </NavLink>
        <NavLink
            to="/ourLayout"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : "text-white"
            }
        >
            Our layout
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : "text-white"
            }
        >
            App
        </NavLink>
    </>
    return (
        <div className="bg-gradient-to-r from-sky-300 to-orange-400 pt-1">
            <div className="">
                <ToastContainer style={{ marginTop: '200px' }} />
            </div>
            <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto space-y-5 lg:space-y-0 my-7 md:px-10 lg:px-0 text-center">
                <div className="flex justify-center items-center lg:justify-start">
                    <img src="https://i.ibb.co/zZKP1Wt/toucan-logo-mini.png" alt="" />
                </div>

                <div className="justify-between flex items-center lg:text-lg font-semibold px-5 md:px-0">
                    {navLists}
                </div>

                <div className="flex justify-center lg:justify-end">
                    {
                        user ? <div className="flex justify-center items-center gap-3 md:gap-10 lg:gap-3">
                            <h2 className="text-xl font-semibold text-[#1e654f]">{user?.displayName}</h2>
                            <button onClick={handleLogout} className="btn btn-accent font-bold">Log Out</button>
                            <img className="w-16 h-16 rounded-full" src={user?.photoURL}></img>
                        </div>
                            :
                            <div className="flex justify-center md:justify-end">
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : ""
                                    }
                                >
                                    <button className="text-xl font-semibold">Login</button>
                                </NavLink>
                            </div>
                    }
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto pb-2 flex justify-center lg:justify-start">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={handletoggle} type="checkbox" />

                    {/* sun icon */}
                    <svg
                        className="swap-on fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;