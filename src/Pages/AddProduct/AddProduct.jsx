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
        console.log(photo, name, brandName, price, description, rating);
        const amazonData = { photo, name, brandName, price, description, rating }
        console.log(amazonData)
        const brand = brandName.toLowerCase();
        if (brand == 'amazon') {
            fetch('http://localhost:5020/amazon', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }
        else if(brand == 'walmart'){
            fetch('http://localhost:5020/walmart', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }
        else if(brand == 'alibaba'){
            fetch('http://localhost:5020/alibaba', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }
        else if(brand == 'eBay'){
            fetch('http://localhost:5020/eBay', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }
        else if(brand == 'target'){
            fetch('http://localhost:5020/target', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }
        else if(brand == 'bestBuy'){
            fetch('http://localhost:5020/bestBuy', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(amazonData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        toast.success('Product SuccessFully Added');
                    }
                })
        }

    }
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <div className="max-w-xl mx-auto bg-slate-300 p-10 rounded-lg">
                <form onSubmit={addProductHandle}>
                    <input className="w-full py-2 pl-3 rounded-lg" type="text" name="photo" placeholder="Product Image" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" type="text" name="name" placeholder="Product Name" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" type="text" name="brandName" placeholder="Brand Name" id="" />
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" type="text" name="price" placeholder="Product Price" id="" />
                    <br />
                    <br />
                    <textarea className="w-full py-2 pl-3 rounded-lg" placeholder="Type Description" name="description" id="" cols="30" rows="5"></textarea>
                    <br />
                    <br />
                    <input className="w-full py-2 pl-3 rounded-lg" type="text" name="rating" id="" />
                    <br />
                    <br />
                    <button className="btn w-full" type="submit">Add Button</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;