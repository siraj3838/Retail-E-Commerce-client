import { toast } from "react-toastify";

const AddProduct = () => {
    const addProductHandle = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const category = form.category.value;
        console.log(photo, name, brandName, price, description, rating);
        const amazonData = { photo, name, brandName, price, description, rating, category }
        console.log(amazonData)

        fetch('https://retail-and-e-commerce-based-server-m162poal5-siraj3838.vercel.app/amazon', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast.success('Product SuccessFully Added');
                        form.reset();
                    }
                })

        

    }
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <div className="max-w-xl mx-auto bg-slate-300 p-10 rounded-lg">
                <form onSubmit={addProductHandle}>
                <h2 className="mb-7 text-center text-3xl font-bold italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Add Your Product</h2>
                    <input className="w-full py-2 pl-3 rounded-lg" required type="text" name="photo" placeholder="Product Image" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" required type="text" name="name" placeholder="Product Name" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" required type="text" name="brandName" placeholder="Brand Name" id="" />
                    <br />
                    <br />
                    <div className="form-control">
                        <div className="">
                            <select name="category" required className="select select-bordered w-full rounded-lg">
                                <option disabled selected>Pick your Own Category</option>
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
                    <input className="w-full py-2 pl-3 rounded-lg" required type="text" name="price" placeholder="Product Price" id="" />
                    <br />
                    <br />
                    <textarea className="w-full py-2 pl-3 rounded-lg" required placeholder="Type Description" name="description" id="" cols="30" rows="5"></textarea>
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" required type="text" name="rating" id="" placeholder="rating" />
                    <br />
                    <br />
                    <button className="btn w-full" type="submit">Add Button</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;