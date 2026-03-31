import React, { use } from 'react';

const Tools = ({ toolsPromise }) => {
    const tools = use(toolsPromise)
    console.log(tools);
    return (
        <div>
            <div className='text-center py-20 space-y-4'>
                <h1 className='font-bold text-6xl text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.</p>
            </div>

            <div>
                {
                    tools.map(tool =>
                        <div>

                            <div className="card w-96 bg-base-100 shadow-sm border relative">
                                <div className="absolute top-3 right-3">
                                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 font-medium">
                                        {tool.tag}
                                    </span>
                                </div>
                                <div className="card-body">

                                    <img className='w-20 h-20 rounded-full border p-2 border-amber-100 bg-white flex items-center justify-center mb-2' src={tool.icon} alt="" />
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold">{tool.name}</h2>
                                        <p>{tool.description}</p>
                                        <p className="text-xl">${tool.price}<span className="text-sm font-normal text-gray-500">/{tool.period}</span></p>
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{tool.features}</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Customizable style templates</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Batch processing capabilities</span>
                                        </li>

                                    </ul>
                                    <div className="mt-6">
                                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full  hover:bg-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group text-white">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                }
            </div>

        </div>
    );
};

export default Tools;