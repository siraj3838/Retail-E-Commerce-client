import moment from "moment/moment";
import { Link } from "react-router-dom";

const EmptyBrand = () => {
    return (
        <div className="py-5 max-w-screen-xl mx-auto">
            <div>
                <div className="bg-gradient-to-r from-orange-300 to-orange-700 py-20 w-2/3 mx-auto px-5 rounded-xl space-y-5">
                    <h4 className="text-2xl font-medium">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4>
                    <h2 className="text-4xl font-bold">This Brand Have No Data Added</h2>
                    <p>Please Go and Add Some Product</p>
                    <Link to={'/addProduct'}>
                        <div>
                            <button className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white mt-4">Go Add Product</button>
                        </div>
                    </Link>
                </div>
                <div className="h-20 w-20 md:h-32 md:w-40 md:ml-[520px] md:-mt-28 lg:h-36 lg:w-36 bg-gradient-to-r from-orange-300 to-orange-700 rounded-xl absolute -mt-16 ml-72 lg:-mt-60 lg:ml-[970px]">
                    <h3 className="text-center mt-10 text-2xl italic font-extrabold bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Toucan</h3>
                </div>
            </div>
        </div>
    );
};

export default EmptyBrand;