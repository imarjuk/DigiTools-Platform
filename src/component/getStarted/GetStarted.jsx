import React from 'react';

const GetStarted = () => {
    return (
        <div className='bg-slate-100 text-center'>

            <h2 className='font-bold text-5xl pt-10'>Get Started in 3 Steps</h2>
            <p className='py-5'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-center mx-auto my-10 w-11/12'>
                 
                <div className="card bg-base-100 w-72 shadow-sm mb-10 relative ">
                    <div className="absolute top-3 right-3">
                                    <span className="text-xs px-3 py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
                                     01
                                    </span>
                                </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/1G1BT6xq/user.png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 shadow-sm mb-10 relative">
                    <div className="absolute top-3 right-3">
                                    <span className="text-xs px-3 py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
                                     02
                                    </span>
                                </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/WWb6qqp8/package.png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 shadow-sm mb-10 relative">
                    <div className="absolute top-3 right-3">
                                    <span className="text-xs px-3 py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium">
                                     03
                                    </span>
                                </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/Jwx0ks25/rocket.png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GetStarted;