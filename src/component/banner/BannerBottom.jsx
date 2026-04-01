import React from 'react';

const BannerBottom = () => {
    return (
        <div className='grid grid-cols-3 mb-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 mx-auto text-center'>
            <div >
                <h2 className='font-bold text-5xl'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div >
                <h2 className='font-bold text-5xl'>200+</h2>
                <p>Premium Tools</p>
            </div>
            <div >
                <h2 className='font-bold text-5xl'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default BannerBottom;