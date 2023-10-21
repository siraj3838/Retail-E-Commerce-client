import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Cart = ({ setSelectItem, selectItem, item }) => {
    const { photo, name, price, _id } = item || {};

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://retail-and-e-commerce-based-server.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = selectItem.filter(carts => carts._id !== _id);
                            setSelectItem(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="card glass">
                <figure><img className="h-72 w-full" src={photo} alt="item!" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="text-[#0f1a5b] text-xl font-semibold">{price}$</p>
                    <div className="">
                        <button onClick={() => handleDelete(_id)} className="btn bg-gradient-to-r from-blue-600 to-black hover:text-green-400 text-white w-full">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;