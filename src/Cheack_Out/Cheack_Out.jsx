
import { useState } from "react";
import { RiCoupon4Line } from "react-icons/ri";
import img from '../assets/img/Rings.jpg'
import { CiCircleInfo } from "react-icons/ci";

const Cheack_Out = () => {
    const [coupon, setCoupon] = useState(false)
    const handleCoupon = () => {
        setCoupon(!coupon)
    }


    const [count, setCount] = useState(1)
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
        <div className="py-8">
            <h2 className="flex items-center justify-center text-3xl font-medium">CheckOut</h2>

            <div className="bg-[#F5F5F5] flex items-center justify-center space-x-2 py-4 mt-4 text-lg">
                <p className="flex items-center justify-center space-x-4 text-[#6a6a6a]"><span><RiCoupon4Line /></span><span> Have a coupon?</span></p>
                <p onClick={handleCoupon} className="font-medium cursor-pointer duration-300">Click here to enter your code</p>
            </div>

            {
                coupon ?
                    <>
                        <div className="flex items-center justify-center flex-col py-6">
                            <p className="text-[#828282]">If you have a coupon code, please apply it below.</p>
                            <form className="flex items-center justify-center flex-col space-y-3 py-4">
                                <input className="w-[70vh] px-4 text-lg py-2 border outline-none" type="text" placeholder="Coupon Code.." />
                                <input className="w-[70vh] text-lg font-medium cursor-pointer bg-[#262626] py-2 border-2 text-[#fff]" type="submit" value="Apply Coupon" />
                            </form>
                        </div>
                    </>
                    :
                    <>
                    </>
            }


            <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-4">
                <div className="grid lg:grid-cols-2 gap-6">

                    <div>
                        <h2 className="text-2xl font-medium py-4">Billing details</h2>

                        <form className="space-y-2 ">
                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">First name <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="First name..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Last name <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="Last name..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Company name (optional)</label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="Company name..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Country / Region <span className="text-[red]">*</span></label>
                                <select className="px-2 py-2 border outline-none">
                                    <option value="">Bangladesh</option>
                                    <option value="">India</option>
                                    <option value="">Pakastan</option>
                                    <option value="">Japan</option>
                                    <option value="">China</option>
                                </select>
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Street address <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="House number and Street name" />
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Town / City <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="Town / City..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">ZIP Code <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="ZIP Code..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Phone <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="text" placeholder="ZPhone..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Email address <span className="text-[red]">*</span></label>
                                <input className="px-2 py-2 border outline-none" type="email" placeholder="Email address..." />
                            </div>

                            <div className="flex  flex-col justify-center space-y-2">
                                <label className="font-medium">Order notes (optional)</label>
                                <textarea className="px-2 py-2 border outline-none" placeholder="Notes about your order, e.g. special notes for delivery." cols="30" rows="8"></textarea>
                            </div>

                        </form>
                    </div>

                    <div className="border border-[#262626] py-8 px-10">
                        <h2 className="text-2xl font-medium">Your order</h2>

                        <div className="flex items-center justify-between py-4 border-b text-lg font-medium">
                            <p className="">Product</p>
                            <p>Subtotal</p>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b mt-4">
                            <div className="flex items-center space-x-3">
                                <img className="w-[60px] h-[60px] border" src={img} alt="" />
                                <div className="">
                                    <h2 className="font-medium">Birds of Paradise Pendant </h2>
                                    <div className="flex items-center text-xl pt-2">
                                        <p onClick={handleRemove} className="px-2 cursor-pointer border">-</p>
                                        <span className="px-2  border">{count}</span>
                                        <p onClick={handleAdd} className="px-2 cursor-pointer border">+</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-medium">$159.00</p>
                            </div>
                        </div>


                        <div className="flex items-center justify-between py-4 border-b text-lg font-medium mt-12">
                            <p className="">Subtotal</p>
                            <p className="font-medium">$159.00</p>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b text-lg font-medium">
                            <p className="">Shipping</p>
                            <p className="font-medium">Flat rate</p>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b text-lg font-medium">
                            <p className="">Total</p>
                            <p className="font-medium">$159.00</p>
                        </div>

                        <div className="border mt-8 px-10 py-8">
                            <div className="border-t-4 border-[#1E85BE] py-4 ">
                                
                                <p className="flex items-baseline space-x-2">
                                    <span className="text-xl text-[#1E85BE]"><CiCircleInfo /></span>
                                    <span className="text-lg text-[#727272]">Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</span>
                                </p>

                            </div>
                        </div>

                        <div className="py-6">
                            <p className="text-lg text-[#727272]">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>

                            <button className="py-2 mt-6 px-2 w-full bg-[#262626] text-[#fff] text-lg font-medium cursor-pointer">Place order</button>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Cheack_Out;