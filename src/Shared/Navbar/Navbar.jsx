import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLists = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-900 hover:text-blue-800 underline" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-900 hover:text-blue-800 underline" : ""
            }
        >
            Add Product
        </NavLink>
        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-900 hover:text-blue-800 underline" : ""
            }
        >
           My Cart
        </NavLink>
    </>
    return (
        <div className="">
            <div className="grid md:grid-cols-3 max-w-screen-xl mx-auto space-y-5 md:space-y-0 my-7 md:px-10 lg:px-0 text-center">
                <div className="flex justify-center items-center md:justify-start">
                    <img src="https://i.ibb.co/zZKP1Wt/toucan-logo-mini.png" alt="" />
                </div>
                <div className="flex justify-center items-center gap-9 md:gap-4 lg:gap-9 lg:text-xl font-semibold">
                    {navLists}
                </div>
                <div className="flex justify-center md:justify-end">
                    <Link to={'/login'}><button className="btn btn-accent font-bold">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;