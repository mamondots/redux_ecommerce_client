import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import img from '../../assets/img/Rings.jpg'
import { FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Side_Cart = ({ setOpen, open }) => {
    const [count, setCount] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [disable, setDisable] = useState(false)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1)
            disable(true)
        }
        else {
            disable(false)
        }
    }
    return (
        <div className="w-full h-screen bg-[#262626b9] fixed right-0 top-0">
            <div className="right-0 absolute top-0 w-[60vh] h-screen bg-[#fff]">
                <div className="flex items-center justify-between px-4 bg-[#F5F5F5] py-4">
                    <h2 className="text-lg font-medium">Your Cart (0)</h2>
                    <p onClick={() => setOpen(!open)} className="cursor-pointer">close</p>
                </div>

                <div className='px-6 py-6'>
                    <div className='flex items-center justify-between'>
                        <img className='w-[60px] h-[60px] border' src={img} alt="" />
                        <h2 className='font-medium text-[#4e4e4e]'>Birds of Paradise Pendant</h2>
                        <p className="px-2 py-2 bg-[#d9d9d9] hover:bg-[#262626] rounded-full hover:text-[#fff] duration-300 cursor-pointer"><FaXmark /></p>
                    </div>

                    <div className='flex items-center justify-center space-x-4 mt-[-12px]'>
                        <div className='flex items-center border text-xl cursor-pointer'>
                            <p onClick={handleRemove} className='px-2 py-2'><MdKeyboardArrowLeft /></p>
                            <p>{count}</p>
                            <p onClick={handleAdd} className='px-2 py-2'><MdKeyboardArrowRight /></p>
                        </div>
                        <h2 className='font-medium'>$12.00</h2>
                    </div>
                </div>

                <div className='bottom-0 absolute px-6 py-4 w-full '>
                    <div className='flex items-center justify-between py-4 border-t'>
                        <p className='text-[#6b6b6b]'>Subtotal:</p>
                        <p className='font-medium'>$159.00</p>
                    </div>
                    <div className='flex  justify-center flex-col space-y-2 font-medium w-full'>
                        <Link>
                            <button className='px-6 py-2 border-2 border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer w-full'>View cart</button>
                        </Link>
                        <Link to='/checkout'>
                            <button className='px-6 py-2 border-2 border-[#262626] bg-[#262626] text-[#fff] w-full'>Checkout</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Side_Cart;