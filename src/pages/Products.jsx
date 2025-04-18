import React from 'react';
import { nfts } from '../assets/assets';
import { ToastContainer } from 'react-toastify';
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import useCart from '../customHooks/useCart';

const Products = () => {
  const { handleAddToCart, handleRemoveCartItem } = useCart();
  const { cartItems } = useSelector((state) => state.cartProducts);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-6xl pt-16 sm:pt-20 lg:pt-36">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {nfts.map((nft) => (
            <div key={nft._id} className="group">
              <img
                alt={nft.name}
                src={nft.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <div className='flex justify-between items-baseline-last'>
                <div>
                  <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-400">{nft.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">${nft.price}</p>
                </div>
                {
                  cartItems.some(item=> item._id === nft._id) ?
                    <MdOutlineRemoveShoppingCart className='text-lg text-red-500 dark:text-red-500 cursor-pointer' onClick={()=>{handleRemoveCartItem(nft)}}/> :
                    <FiShoppingCart className='text-lg dark:text-white cursor-pointer' onClick={()=>{handleAddToCart(nft)}}/>
                }
              </div>
            </div>
          ))}
        </div>
        <ToastContainer position="bottom-right"/>
      </div>
    </div>
  )
}

export default Products