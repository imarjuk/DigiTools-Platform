import React from 'react';

const GetStarted = () => {
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl border relative">

            
                <div className="absolute top-3 right-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                        Best Seller
                    </span>
                </div>

                <div className="card-body">

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                        ✍️
                    </div>

                    {/* Title */}
                    <h2 className="card-title text-lg font-bold">
                        AI Writing Pro
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500">
                        Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
                    </p>

                    {/* Price */}
                    <p className="text-xl font-bold mt-2">
                        $29<span className="text-sm font-normal text-gray-500">/Mo</span>
                    </p>

                    {/* Features */}
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span> Unlimited AI generations
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span> 50+ writing templates
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✔</span> Grammar checker
                        </li>
                    </ul>

                    {/* Button */}
                    <div className="mt-5">
                        <button className="w-full py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;