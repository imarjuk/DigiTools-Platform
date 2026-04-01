import React, { use } from 'react';
import ToolCard from '../toolCard/ToolCard';

const Tools = ({ toolsPromise, carts, setCarts}) => {
    const tools = use(toolsPromise)

    return (
        
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>
                {
                    tools.map(tool =>


                        <ToolCard key={tool.id}
                         tool={tool} carts={carts} 
                         setCarts={setCarts}></ToolCard>

                    )
                }
            </div>

    
    );
};

export default Tools;