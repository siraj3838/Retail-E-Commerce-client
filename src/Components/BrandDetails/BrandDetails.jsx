import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const [detailsInfo, setDetailsInfo] = useState({})
    const { id } = useParams();
    const loadData = useLoaderData();
    useEffect(() => {
        const findData = loadData.find(item => item._id == id);
        setDetailsInfo(findData);
    }, [id, loadData])

    return (
        <div className="bg-gradient-to-r from-white to-orange-400 py-5">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1 flex items-center">
                        <img src={detailsInfo.photo} alt="" />
                        </div>
                    <div className="flex items-center">
                        <div className="space-y-12">
                            <h2 className="text-3xl font-semibold">{detailsInfo.name}</h2>
                            <h2 className="text-xl font-bold">{detailsInfo.price}$</h2>
                            <p className="text-gray-500">{detailsInfo.description}</p>
                            <h2 className="text-xl font-semibold">{detailsInfo.category}</h2>
                            <button className="">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;