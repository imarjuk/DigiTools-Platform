import React from 'react';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, cart) => sum+ cart.price, 0)

    const handleProceedToCheckout = ()=>{
        setCarts([])
    }

    const handleRemove =(cart)=>{
        const filterArray = carts.filter(c => c.id !== cart.id)
        setCarts(filterArray)
    }

    return (
        <div className='w-11/12 mx-auto my-10 border border-gray-200 rounded-2xl '>
            <h3 className='font-bold text-xl p-10'>Your Cart</h3>
            {
                carts.length === 0 ?
                 <div className=' p-5 mx-10 my-5 bg-slate-100 rounded-2xl text-center font-bold'>  
                    <p>Your Cart is Empty</p> </div>

                 :
                 
                 <div>
                    {
                carts.map(cart =>
                    <div className='flex justify-between items-center p-5 mx-10 my-5 bg-slate-100 rounded-2xl'>
                        <div className='flex items-center gap-5 space-y-2'>

                            <div className='bg-white p-3 rounded-full'>
                                <img className='w-15 h-15' src={cart.icon} alt="" />

                            </div>

                            <div>
                                <h3 className='font-bold text-xl mb-2'>{cart.name}</h3>
                                <p>${cart.price}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleRemove(cart)} className='btn btn-soft btn-error'>remove</button>
                        </div>
                    </div>

                )
            }
          <div className='flex justify-between mx-12'>
              <p>Total: </p>
              <h3 className='font-bold text-xl'>$ {totalPrice}</h3>
             
          </div>
          <div className='flex justify-center mx-12 my-5'>
             <button onClick={ handleProceedToCheckout} className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-6 text-xl text-white'>Proceed to Checkout</button>
          </div>
                
            </div>

            }

           
        


        </div>
    );
};

export default Cart;