
import Swal from "sweetalert2";

const FeedBack = () => {
    const feedBackHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const message = form.message.value;
        const feedbackData = { name, message };
        console.log(feedbackData)
        Swal.fire({
            title: 'Are you sure?',
            text: "Feedback Post Our Web Site!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Post it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://retail-and-e-commerce-based-server.vercel.app/feedbacks', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(feedbackData),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire(
                                'Thank You',
                                'For Feedback Successfully Post',
                                'success'
                              )
                            form.reset();
                            window.location.reload()
                        }
                    })

            }
        })

    }
    return (
        <div className="bg-[#410bd552] py-5 px-5">
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="space-y-4 border-2 max-w-3xl mx-auto shadow-2xl py-7">
                    <h2 className="bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text text-5xl font-extrabold">Active Feedback</h2>
                    <p className="text-lg"><span className="text-xl text-red-800 font-semibold">Dear User,</span> <br />Please Type Your Feedback</p>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={feedBackHandle}>
                            <input className="w-full pl-5 py-3 rounded-xl" type="text" name="name" placeholder="Name *" id="" required />
                            <br />
                            <br />
                            <textarea className="w-full rounded-xl pl-5 py-5" placeholder="Feedback" name="message" id="" cols="30" rows="10"></textarea>
                            <br />
                            <br />
                            <input className="w-full rounded-xl pl-5 py-3 text-white px-3 hover:text-blue-800 bg-gradient-to-r from-orange-600 to-orange-400 font-bold text-xl" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;