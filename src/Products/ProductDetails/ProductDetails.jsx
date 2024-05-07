import { Rating } from "@smastrom/react-rating";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { GoStopwatch } from "react-icons/go";

import product from '../../assets/img/products.jpg'
import trust_brand from '../../assets/img/trust_badge.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuCircleOff } from "react-icons/lu";
import { PiHandshakeLight } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import Product_DescriptionorReview from "../Product_DescriptionorReview/Product_DescriptionorReview";
import Relative_products from "../Relative_products/Relative_products";
const ProductDetails = () => {
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
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8 ">
            <div className="flex items-center space-x-2 py-3">
                <p className="hover:text-[#D90000] duration-300 cursor-pointer">
                    <Link to='/'>
                        Home
                    </Link>
                </p>
                <p>/</p>
                <p>Birds of Paradise Pendant</p>
            </div>
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

                    <div className="space-y-2">
                        <p className='flex items-center space-x-2 text-lg'><span><CiHeart /></span> <span>Add to wishlist</span></p>

                        <div className="flex items-center space-x-4">
                            <p className='flex items-center space-x-2 text-lg'><span><LuCircleOff /></span> <span>Delivery & Return</span></p>

                            <p className='flex items-center space-x-2 text-lg'><span><AiTwotoneQuestionCircle /></span> <span>Ask a Question</span></p>
                        </div>


                        <div className="flex items-center space-x-2">
                            <p className='flex items-center space-x-2 text-lg'><span><GoStopwatch /></span> <span>Estimated Delivery:</span></p>
                            <p className="text-[#7d7d7d]">29 April - 03 May</p>
                        </div>

                        <p className='flex items-center space-x-2 text-lg'><span><IoEyeOutline /></span> <span className="text-[#7d7d7d]">30 People viewing this product right now!</span></p>
                    </div>

                    <div className='grid lg:grid-cols-4 gap-4 py-4 mt-4 text-lg'>
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


                    <div className="relative py-2">
                         <p className="ml-2 absolute top-[-3px] inline-block font-medium text-center   items-center">Guaranteed Safe Checkout</p>
                         <div className="border px-14 py-6">
                             <img src={trust_brand} alt="" />
                         </div>
                    </div>


                </div>
            </div>

            <Product_DescriptionorReview></Product_DescriptionorReview>

            <div>
                <Relative_products></Relative_products>
            </div>
        </div>
    );
};

export default ProductDetails;