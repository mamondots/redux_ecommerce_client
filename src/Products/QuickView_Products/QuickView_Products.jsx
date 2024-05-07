import { Dialog, Transition } from '@headlessui/react';
import './QuickView_Products.css'
import { Fragment, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiMiniXMark } from 'react-icons/hi2';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import product from '../../assets/img/products.jpg'
import { Rating } from '@smastrom/react-rating';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { LuCircleOff } from "react-icons/lu";


const QuickView_Products = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [count, setCount] = useState(1)
    const [disable, setDisable] = useState(false)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1)
            setDisable(true)
        }
        else {
            setDisable(false)
        }

    }
    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className=""
                >
                    <CiSearch />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='grid lg:grid-cols-2 gap-8'>
                                        <div className='border'>
                                            <img src={product} alt="" />
                                        </div>

                                        <div>
                                            <h2 className='text-xl font-medium'>Birds of Paradise Pendant</h2>
                                            <p className='flex'>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={4.5}
                                                    readOnly
                                                />
                                                (customer review)
                                            </p>
                                            <div className='flex items-center space-x-4 py-2'>
                                                <p className='font-medium'>$102.00</p>
                                                <p className='text-sm'>$120.00</p>
                                            </div>
                                            <p className='text-[#737373]'>
                                                This regulator has a rolled diaphragm and high flow rate with reduced pressure drop.It has an excellent degree of condensation.
                                            </p>
                                            <div className='flex items-center space-x-2 py-2 text-lg font-medium'>
                                                <p>Availability :</p>
                                                <p>In Stock</p>
                                            </div>

                                            <div className='flex items-center space-x-5'>
                                                <div className='flex items-center justify-center text-xl font-medium border bg-[#F9F9F9] cursor-pointer'>
                                                    <p onClick={handleRemove} className='px-2 py-2   duration-300'><MdKeyboardArrowLeft /></p>
                                                    <p className='px-2'>{count}</p>
                                                    <p onClick={handleAdd} className='px-2 py-2 duration-300'><MdKeyboardArrowRight /></p>
                                                </div>

                                                <div>
                                                    <button className='px-8 py-2 bg-[#262626] text-[#fff] uppercase cursor-pointer'>Add to cart</button>
                                                </div>
                                            </div>
                                            <div className='py-4'>
                                            <button className='bg-[#E5E5E5] uppercase py-2 px-24 font-medium hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer'>BUY IT NOW</button>
                                            </div>

                                            <div>
                                                <p className='flex items-center space-x-2 text-lg'><span><CiHeart /></span> <span>Add to wishlist</span></p>
                                                <p className='flex items-center space-x-2 text-lg'><span><IoEyeOutline /></span> <span>30People viewing this product right now!</span></p>
                                            </div>

                                            <div className='grid lg:grid-cols-4 gap-4 py-4'>
                                                 <div className='text-center flex items-center flex-col space-y-1'>
                                                    <p className='text-xl'><FiTruck /></p>
                                                    <p className='text-[#757575]'>Free Shipping</p>
                                                 </div>

                                                 <div className='text-center flex items-center flex-col space-y-1'>
                                                    <p className='text-xl'><IoShieldCheckmarkOutline /></p>
                                                    <p className='text-[#757575]'>1 Year Warranty</p>
                                                 </div>

                                                 <div className='text-center flex items-center flex-col space-y-1'>
                                                    <p className='text-xl'><PiHandshakeLight /></p>
                                                    <p className='text-[#757575]'>Secure payment</p>
                                                 </div>

                                                 <div className='text-center flex items-center flex-col space-y-1'>
                                                    <p className='text-xl'><LuCircleOff /></p>
                                                    <p className='text-[#757575]'>30 Days Return</p>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="top-0 right-0 absolute">
                                        <button
                                            type="button"
                                            className="text-lg px-2 py-2 bg-[#23232C] text-[#fff] hover:bg-[#D90000] duration-300"
                                            onClick={closeModal}
                                        >
                                            <HiMiniXMark />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default QuickView_Products;