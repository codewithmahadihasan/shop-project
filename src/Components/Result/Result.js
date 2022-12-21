import React from 'react';
import "./Result.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const Result = (props) => {
    const { cart, crearCard, children } = props
    let total = 0;
    let shipping = 0;
    let quantity = 0

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    let tax = total * 0.1;
    let all = tax + total + shipping;

    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r bg-gray-900 border-gray-700">
            <h2 className="text-3xl font-semibold text-center text-gray-800 text-white">Order Summary</h2>



            <div className="flex flex-col justify-between flex-1 mt-6">

                <div>
                    <p className='px-4 py-2 text-gray-200'>Selected Items: {quantity}</p>
                    <p className='px-4 py-2 mt-4 text-gray-200'>Total Price: ${total}</p>
                    <p className='px-4 py-2 mt-4 text-gray-200'>Shipping Charge: ${shipping}</p>
                    <p className='px-4 py-2 mt-4 text-gray-200'>Tax: ${tax.toFixed(2)}</p>
                    <h4 className='px-4 py-2 mt-4 text-gray-200'>Grand Total: ${all.toFixed(2)}</h4>
                    <div className='flex flex-col gap-4'>
                        <button onClick={crearCard} className='py-2 w-full' id='clear'>Clear Card <FontAwesomeIcon icon={faTrash} /></button>

                        {
                            children
                        }
                    </div>
                </div>



            </div>
        </div>

    );

};

export default Result;