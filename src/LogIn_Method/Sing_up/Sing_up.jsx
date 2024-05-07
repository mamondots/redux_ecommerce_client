
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Sing_up = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const [shows, setShows] = useState(false)

    const handleShows = () => {
        setShows(!shows)
    }
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div><h2 className="text-xl font-bold"><Link to='/'>Mamon_Dots</Link></h2></div>

            <div className="border mt-12 py-4 mx-80">
                <h2 className="text-center py-4 text-2xl font-semibold">Sign Up</h2>

                <form className="px-12 py-2">
                    <div>
                        <label className="font-medium flex items-center space-x-2 py-1"><span>Your Name</span> <span className="text-[red] text-xl">*</span></label>
                        <input className="border outline-none px-4 py-2 w-full" type="email" placeholder="Enter Name..." />
                    </div>

                    <div>
                        <label className="font-medium flex items-center space-x-2 py-1"><span>Your Email</span> <span className="text-[red] text-xl">*</span></label>
                        <input className="border outline-none px-4 py-2 w-full" type="email" placeholder="Enter Email..." />
                    </div>

                    <div className="relative">
                        <label className="font-medium flex items-center space-x-2 py-1"><span>Password</span> <span className="text-[red] text-xl">*</span></label>
                        <input className="border outline-none px-4 py-2 w-full" type={show ? "text" : "password"} placeholder="Enter Password..." />
                        <p onClick={handleShow} className='right-4 top-12 absolute text-xl cursor-pointer'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                    </div>


                    <div className="relative">
                        <label className="font-medium flex items-center space-x-2 py-1"><span>Conform Password</span> <span className="text-[red] text-xl">*</span></label>
                        <input className="border outline-none px-4 py-2 w-full" type={shows ? "text" : "password"} placeholder="Enter Conform Password..." />
                        <p onClick={handleShows} className='right-4 top-12 absolute text-xl cursor-pointer'>{shows ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                    </div>


                    <div className="py-2 mt-2">
                        <input className="px-12 cursor-pointer hover:bg-[#000000] duration-300 py-2 bg-[#262626] text-[#fff]" type="submit" value="Sign Up" />
                    </div>

                    <div className="flex items-center justify-center flex-col mt-2">
                        <h2 className="text-xl font-medium py-2">Sing Up With</h2>
                        <div className="flex items-center space-x-2">
                            <p className="px-2 py-2 rounded-full border-2 border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer"><FaGoogle /></p>
                            <p className="px-2 py-2 rounded-full border-2 border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer"><FaFacebookF /></p>
                        </div>
                    </div>

                    <div>
                        <Link to='/sign_In'>
                            <p className="text-center mt-4">if you are already sing up plz <span className="font-medium cursor-pointer hover:text-[#7c3636] duration-300">Sing In</span> now</p>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sing_up;