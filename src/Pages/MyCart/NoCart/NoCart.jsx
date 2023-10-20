import { Link } from "react-router-dom";

const NoCart = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="space-y-3 py-5">
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/kXt4GSM/images-1-removebg-preview-1.png" alt="" />
                </div>
                <div className="flex justify-center text-white">
                    <div className="text-center md:px-36 lg:px-[460px] space-y-3">
                        <h3 className="text-3xl font-bold">Your Cart is <span className="text-red-700">Empty!</span></h3>
                        <p>Please Dear User Choice Some Item. Please Go Home Button and Choice Your Brand Cart</p>
                        <Link to={'/'}>
                        <div>
                            <button className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white mt-4">Home</button>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoCart;