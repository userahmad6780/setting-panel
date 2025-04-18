import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateTotal } from '../redux/actions/products';
import { useNavigate } from 'react-router-dom';
import { nfts } from '../assets/assets';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { cartItems, subTotal } = useSelector((state) => state.cartProducts);

  function handleRemoveCartItem(selectedItem){
    let filteredItems = cartItems.filter(item=> item._id !== selectedItem._id)
    let totalAmount = subTotal - selectedItem.price
    dispatch(updateTotal(totalAmount))
    dispatch(removeFromCart(filteredItems))
  }

useEffect(()=>{
    console.log(cartItems, 'reducer --------------------CART------------------- item')
  },[cartItems])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl pt-16 sm:pt-20 lg:pt-36">
        {
            cartItems.length == 0 ?
            <div className="text-center">
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
                    Products not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Add items to cart for purchase
                </p>
                <button
                    type="button"
                    onClick={() => navigate('/products')}
                    className="mt-2 font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                    >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                </button>
            </div> :
            <div className="flex h-full flex-col bg-white shadow-xl">
        
                <ul role="list" className="-my-6 divide-y divide-gray-200 overflow-y-auto px-4 py-6 sm:px-6">
                    {cartItems.map((item) => (
                        <li key={item._id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img alt={item.image} src={item.image} className="size-full object-cover" />
                            </div>
    
                            <div className="ml-4 flex flex-1 flex-col">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <p>{item.name}</p>
                                    </h3>
                                    <p className="ml-4">{item.price}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>
                                    <div className="flex">
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={()=>{handleRemoveCartItem(item)}}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
    
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                        >
                            Checkout
                        </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{' '}
                            <button
                            type="button"
                            onClick={() => navigate('/products')}
                            className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
    
            </div>
        }
      </div>
    </div>
  )
}

export default Cart