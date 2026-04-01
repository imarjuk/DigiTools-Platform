import React from 'react';
import { FaCheck } from "react-icons/fa";

const PriceCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center mx-auto my-10 w-11/12'>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
        
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                        <p>$0<span className="text-xl">/mo</span></p>
                        
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
            
                            <span> <FaCheck /> Access to 10 free tools</span>
                        </li>
                       
                       
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Get Started Free</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
        
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                        <p>$0<span className="text-xl">/mo</span></p>
                        
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
            
                            <span> <FaCheck /> Access to 10 free tools</span>
                        </li>
                       
                       
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Get Started Free</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
        
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                        <p>$0<span className="text-xl">/mo</span></p>
                        
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
            
                            <span> <FaCheck /> Access to 10 free tools</span>
                        </li>
                       
                       
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;