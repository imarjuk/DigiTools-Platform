import React from 'react';

const BannerBottom = () => {
    return (
        <div className='grid grid-cols-3 mb-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 mx-auto text-center'>
            <div className='border-r'>
                <h2 className='font-bold text-5xl mb-3'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div className='border-r'>
                <h2 className='font-bold text-5xl  mb-3'>200+</h2>
                <p>Premium Tools</p>
            </div>
            <div >
                <h2 className='font-bold text-5xl  mb-3'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default BannerBottom;