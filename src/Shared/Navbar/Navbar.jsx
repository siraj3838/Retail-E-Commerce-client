import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
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
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : ""
            }
        >
            Add Product
        </NavLink>
        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white px-3 py-2 rounded-lg hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400" : ""
            }
        >
            My Cart
        </NavLink>
    </>
    return (
        <div className="">
            <div className="">
                <ToastContainer style={{ marginTop: '200px' }} />
            </div>
            <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto space-y-5 lg:space-y-0 my-7 md:px-10 lg:px-0 text-center">
                <div className="flex justify-center items-center lg:justify-start">
                    <img src="https://i.ibb.co/zZKP1Wt/toucan-logo-mini.png" alt="" />
                </div>
                <div className="flex justify-center items-center gap-9 md:gap-12 lg:gap-9 lg:text-xl font-semibold">
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
        </div>
    );
};

export default Navbar;