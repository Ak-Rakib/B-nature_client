import React from 'react';

const AddPost = () => {

    const addPostHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const description = form.description.value;

        const post = {
            name,
            photoURL,
            price,
            description
        }

        fetch('https://b-nature-server-ak-rakib.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('post successfully')
                    form.reset()
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={addPostHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="photoURL" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="price" name='price' placeholder="Type your Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Type Description" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Post" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost;