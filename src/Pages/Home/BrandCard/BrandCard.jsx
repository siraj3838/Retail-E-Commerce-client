
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
    const [brandCard, setBrandCard] = useState([]);
    useEffect(()=>{
        fetch('/homeData.json')
        .then(res => res.json())
        .then(data => setBrandCard(data))
    },[])
    return (
        <div className="my-10 px-5 lg:px-0">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="lg:text-5xl font-bold py-7 text-4xl my-8 md:mx-[200px] lg:my-16 text-center border-b-2 lg:mx-96 bg-gradient-to-r from-orange-500 to-yellow-800 text-transparent bg-clip-text">Our <span className="">Brand</span> Name</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        brandCard?.map(brand => <div key={brand.id}>
                            <Link to={`/${brand.brand_name}`}>
                        <div className="bg-gradient-to-r from-blue-300 to-orange-300 shadow-2xl pt-5 rounded-lg">
                            <div className="flex justify-center items-center">
                                <img className="w-80 h-52" src={brand?.image} alt="" />
                            </div>
                            <h3 className="text-2xl text-center font-bold py-3 text-[#0d0a52]">{brand?.brand_name}</h3>
                        </div>
                    </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandCard;