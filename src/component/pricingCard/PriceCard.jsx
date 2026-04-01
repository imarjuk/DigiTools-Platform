import React from 'react';
import { FaCheck } from "react-icons/fa";

const PriceCard = () => {
    return (
        <div className='text-center'>
            <h2 className='font-bold text-5xl pt-10'>Get Started in 3 Steps</h2>
            <p className='py-5'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center mx-auto my-10 w-11/12'>
                <div className="card w-96 bg-base-100 shadow-sm border-slate-50 relative">

                    <div className="card-body text-left">

                
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                            <p className="text-xl">$0<span className="text-sm font-normal text-gray-500">/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button
                                className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full  hover:bg-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group text-white">
                                Get Started Free
                            </button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm border-slate-50 relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">

                    <div className="card-body text-left ">

                
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                            <p className="text-xl">$29<span className="text-sm text-white font-normal">/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button
                                className="btn w-full  rounded-full  text-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group ">
                                Start Pro Trial
                            </button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm border-slate-50 relative">

                    <div className="card-body text-left"> 

                
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                            <p className="text-xl">$99<span className="text-sm font-normal text-gray-500">/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button
                                className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full  hover:bg-[#9514FA] transition-all px-8 py-2  font-semibold text-lg  flex items-center gap-3 group text-white">
                              Contact Sales
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PriceCard;