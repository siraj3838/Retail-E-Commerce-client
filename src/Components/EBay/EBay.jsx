import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EmptyBrand from "../../Pages/EmptyBrand/EmptyBrand";
import Rating from "react-rating";

const EBay = () => {
    const eBayData = useLoaderData();
    const [eBayDetails, setEBayDetails] = useState([])
    useEffect(() => {
        const eBayS = eBayData.filter(eBay => eBay?.brandName == 'eBay');
        setEBayDetails(eBayS)
    }, [eBayData])
    return (
        <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
            <div>
                <h2 className="text-center text-5xl font-bold my-7">eBay Product</h2>
                <div className="carousel w-full h-[540px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/FKDpSXz/How-to-Get-More-Views-on-e-Bay.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Kmwss64/e3830024-f438-42aa-9d4c-cf143b8851dc.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/270Hg1F/maxresdefault-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            {
                eBayDetails.length ? <div className="grid lg:grid-cols-2 gap-5 my-10">
                {
                    eBayDetails.map(detail => <div className="grid grid-cols-1 md:grid-cols-3 gap-3 shadow-2xl bg-accent rounded-lg py-5 md:py-0" key={detail._id}>
                        <div className="md:col-span-1 flex justify-center pt-5 md:pt-0 px-4 md:px-0">
                            <img src={detail?.photo} alt="" />
                        </div>
                        <div className="flex justify-center text-center md:text-left items-center py-6">
                            <div className="space-y-6">
                                <h4 className=" text-3xl font-semibold italic bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-700 text-transparent bg-clip-text">{detail?.name}</h4>
                               
                                    <h4 className="text-2xl font-medium bg-gradient-to-r from-black  to-orange-300 text-transparent bg-clip-text">{detail?.brandName}</h4>
                                    <h4 className="text-xl font-medium bg-gradient-to-r from-black  to-orange-300 text-transparent bg-clip-text">{detail?.category}</h4>
                               
                                    <div className="flex justify-center md:justify-start gap-4">
                                        <div>
                                            {
                                                detail ? <h4 className="text-xl font-extrabold bg-gradient-to-r from-orange-900 via-orange-800 to-yellow-900 text-transparent bg-clip-text">{detail.price}$</h4> : ''
                                            }
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600"><Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={detail.rating}
                                                readonly
                                            />
                                            </h4>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="md:flex justify-center items-center md:col-span-1">
                            <div className="flex md:flex-col justify-center gap-10">
                                <div>
                                <Link to={`/details/${detail._id}`}>
                                    <div>
                                        <button className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white">Details</button>
                                    </div>
                                </Link>
                                </div>
                                <Link to={`/updateForm/${detail._id}`}>
                                    <button className="btn bg-gradient-to-r from-gray-500 to-red-600 hover:text-blue-800 text-white">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            :
            <EmptyBrand></EmptyBrand>
            }
        </div>
    );
};

export default EBay;