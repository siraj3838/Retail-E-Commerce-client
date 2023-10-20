import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BrandDetails = () => {
    const [detailsInfo, setDetailsInfo] = useState({})
    const { id } = useParams();
    const loadData = useLoaderData();
    useEffect(() => {
        const findData = loadData.find(item => item._id == id);
        setDetailsInfo(findData);
    }, [id, loadData]);
console.log(detailsInfo)
const sendData = {
    photo: detailsInfo.photo,
    name: detailsInfo.name,
    price: detailsInfo.price,
    description: detailsInfo.description,
    category: detailsInfo.category,
}
    const addedProductToMyCart = () =>{
        fetch('https://retail-and-e-commerce-based-server.vercel.app/carts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
                    if (data.insertedId) {
                        toast.success('Product Select SuccessFully');
                    }
        })
    }

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
                            <button onClick={addedProductToMyCart} className="btn bg-gradient-to-r from-orange-600 to-orange-400 hover:text-blue-800 text-white">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;