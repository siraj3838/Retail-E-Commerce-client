import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { toast } from "react-toastify";

const UpdateForm = () => {
    const updateData = useLoaderData();
    const {id} = useParams();
    const [currentData, setCurrentData] = useState({});
    // console.log(id, currentData)

    useEffect(()=>{
        const findData = updateData.find(data => data._id == id);
        setCurrentData(findData);
        console.log(findData)
    },[id, updateData])


    // const updateFormHandle = e =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const photo = form.photo.value;
    //     const name = form.name.value;
    //     const brandName = form.brandName.value;
    //     const category = form.category.value;
    //     const price = form.price.value;
    //     const rating = form.rating.value;
    //     const inputData = {
    //         photo, 
    //         name, 
    //         brandName, 
    //         category, 
    //         price, 
    //         rating,
    //     }
    //     console.log(inputData)

    //     fetch('https://retail-and-e-commerce-based-server-m162poal5-siraj3838.vercel.app/amazon', {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(inputData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })

    //     // fetch(`https://retail-and-e-commerce-based-server-m162poal5-siraj3838.vercel.app/amazon/${currentData._id}`, {
    //     //     method: "PUT",
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(inputData)
    //     // })
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     console.log(data)
    //     //     if(data.modifiedCount > 0){
    //     //         toast.success('Update Successfully');
    //     //     }
    //     // })
    // }
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <div className="max-w-xl mx-auto bg-slate-300 p-10 rounded-lg">
                <form>
                    <h2 className="mb-7 text-center text-3xl font-bold italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Update Your Product Details</h2>
                    <input className="w-full py-2 pl-3 rounded-lg"  type="text" name="photo" defaultValue={currentData.photo} placeholder="Product Image" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg"  type="text" name="name" defaultValue={currentData.name} placeholder="Product Name" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg"  type="text" name="brandName" defaultValue={currentData.brandName} placeholder="Brand Name" id="" />
                    <br />
                    <br />
                    <div className="form-control">
                        <div className="">
                            <select name="category" defaultValue={currentData.category}  className="select select-bordered w-full rounded-lg">
                                <option disabled>Pick your Own Category</option>
                                <option>Smart Watch</option>
                                <option>Sunglasses</option>
                                <option>Shoes</option>
                                <option>HeadPhone</option>
                                <option>Ornaments</option>
                                <option>Dress</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg"  type="text" name="price" defaultValue={currentData.price} placeholder="Product Price" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg"  type="text" name="rating" id="" defaultValue={currentData.rating} placeholder="rating" />
                    <br />
                    <br />
                    <button className="btn w-full" type="submit">Update Button</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;