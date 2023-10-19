import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Amazon = () => {
    const amazonData = useLoaderData();
    console.log(amazonData)
    const [amazonsDetails, setAmazonsDetails] = useState([])
    useEffect(() => {
        const amazons = amazonData.filter(amazon => amazon?.brandName == 'Amazon');
        setAmazonsDetails(amazons)
    }, [amazonData])
    return (
        <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
            <div>
                <h2 className="text-center text-5xl font-bold my-7">Amazon Product</h2>
                <div className="carousel w-full h-[540px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tzzZDYN/maxresdefault.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/HGrLqbJ/maxresdefault-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/GHwbFSn/Amazon-advertising-scaled.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 my-10">
                {
                    amazonsDetails.map(detail => <div className="grid grid-cols-1 md:grid-cols-3 gap-3 shadow-2xl bg-accent rounded-lg py-5 md:py-0" key={detail._id}>
                        <div className="md:col-span-1 flex justify-center pt-5 md:pt-0 px-4 md:px-0">
                            <img src={detail.photo} alt="" />
                        </div>
                        <div className="flex justify-center text-center md:text-left items-center py-6">
                            <div className="space-y-6">
                                <h4 className=" text-3xl font-semibold italic bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-700 text-transparent bg-clip-text">{detail.name}</h4>
                                <div>
                                    <h4 className="text-2xl font-medium bg-gradient-to-r from-black  to-orange-300 text-transparent bg-clip-text">{detail.brandName}</h4>
                                    <h4 className="text-xl font-medium bg-gradient-to-r from-black  to-orange-300 text-transparent bg-clip-text">{detail.category}</h4>
                                </div>
                                <div className="flex justify-between">
                                    {
                                        detail ? <h4 className="text-xl font-extrabold bg-gradient-to-r from-orange-900 via-orange-800 to-yellow-900 text-transparent bg-clip-text">{detail.price}$</h4> : ''
                                    }
                                    <h4 className="text-lg font-semibold">{detail.rating}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-center items-center md:col-span-1">
                            <div className="flex md:flex-col justify-center gap-10">
                                <Link to={`/details/${detail._id}`}>
                                    <div>
                                        <button className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white">Details</button>
                                    </div>
                                </Link>
                                <Link to={`/updateForm/${detail._id}`}>
                                    <button className="btn bg-gradient-to-r from-gray-500 to-red-600 hover:text-blue-800 text-white">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Amazon;