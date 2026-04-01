import React from 'react';
import BannerImage from '../../assets/banner.png';

import { FiTarget } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="relative min-h-162.5 flex justify-between items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-[#E1E7FF] rounded-full">
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm font-medium px-5 py-2'>  New: AI-Powered Tools Available</p>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-[#101727]/90">
                           Supercharge Your
                            <br />
                            Digital Workflow
                        </h1>

                        <p className="text-lg text-[#627382] max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full  hover:bg-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group text-white">
                                Explore Products
                            </button>
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full  hover:bg-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group text-white">
                              <FaPlay /> Watch Demo
                            </button>
                    
                        </div>


                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                                src={BannerImage}
                                alt="AI Models Banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;