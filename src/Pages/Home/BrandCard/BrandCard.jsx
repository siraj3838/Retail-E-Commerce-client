import { Link } from "react-router-dom";

const BrandCard = () => {
    return (
        <div className="my-10 px-5 lg:px-0">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Link to={'/amazon'}>
                        <div className="bg-gradient-to-r from-orange-300 to-gray-700 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/VNN8LRP/download.jpg" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">Amazon</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="bg-gradient-to-r from-blue-300 to-orange-300 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/0nk910j/download.png" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">Walmart</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="bg-gradient-to-r from-white to-orange-400 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/dpR9R2S/download-1.png" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">Alibaba</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="bg-gradient-to-r from-red-400 via-blue-500 to-green-400 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/PCZQv7g/download-2.png" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">eBay</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="bg-gradient-to-r from-gray-300 to-red-500 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/7YHPBgy/images.png" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">Target</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="bg-gradient-to-r from-sky-600 to-sky-300 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src="https://i.ibb.co/4sNs8nX/download-1.jpg" alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-white">Best Buy</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;