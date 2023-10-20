import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import NoCart from "./NoCart/NoCart";

const MyCart = () => {
    const selectedData = useLoaderData();
    const [selectItem, setSelectItem] = useState(selectedData);

    
    return (
        <div className="bg-gradient-to-r from-blue-400 py-5 to-orange-400 mb-8">
            <h2 className="bg-gradient-to-r from-orange-400 to-blue-700 text-transparent bg-clip-text text-5xl text-center font-bold mb-10">Our Users Select Product</h2>
            {
                selectItem.length ? <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 lg:gap-28">
                {
                    selectItem?.map(item => <Cart key={item._id} item={item} selectItem={selectItem} setSelectItem={setSelectItem}></Cart>)
                }
            </div>
            :
            <NoCart></NoCart>
            }
        </div>
    );
};

export default MyCart;