import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer style={{marginTop: '200px'}}/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;