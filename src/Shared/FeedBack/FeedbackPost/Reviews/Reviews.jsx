import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const Reviews = ({ review, }) => {
    const { user } = useContext(AuthContext);
    const { name, _id, message } = review || {};

    return (
        <div className="max-w-screen-xl mx-auto my-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 shadow-2xl bg-accent py-5 px-5 rounded-md">
                <div className="flex gap-2 md:justify-center lg:justify-start">
                    <div className="md:col-span-1 flex justify-center border rounded-full bg-[#2de9ba] p-5">
                        {
                            user ? <img className="h-40 w-40 rounded-full" src={user?.photoURL} alt="" /> : ''
                        }
                    </div>
                    <div className="flex items-center">
                        <h4 className=" text-3xl font-semibold italic bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-700 text-transparent bg-clip-text">{name}</h4>
                    </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                        <div className="flex lg:justify-center"><h3 className="text-orange-600 text-2xl font-semibold text-center">Client Reviews</h3></div>
                        <div className="border shadow-md text-base h-40 mt-2 pl-2 pt-2">
                            {message}
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/0tGmKmZ/360-F-94221253-f-Agv0-Jym53ysz7nwoq-XRmkb6-GAKw-Nsfs-removebg-preview.png" className="w-32 relative -mt-[500px] ml-64 md:-mt-[500px] md:ml-[620px] lg:-mt-[300px] lg:ml-[1195px]" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Reviews;