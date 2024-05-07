import './Top_Head.css'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Side_Cart from '../../Cart/Side_Cart/Side_Cart';
import { useState } from 'react';


const Top_Head = () => {

    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className="flex items-center justify-between">

                <div><h2 className="text-xl font-bold"><Link to='/'>Mamon_Dots</Link></h2></div>


                <div className="lg:flex hidden items-center justify-center space-x-8 font-medium text-[#262626] text-lg list-none ml-20 menu_link">
                    <li><Link to='/'><a href="">Home</a></Link></li>
                    <li><Link to='/shop'><a href="">Shop</a></Link></li>
                    <li><a href="">Products</a></li>
                    <li><Link to='/blogs'><a href="">Blogs</a></Link></li>
                    <li><Link to='./about'><a href="">About</a></Link></li>
                    <li><Link to='/contact'><a href="">Contact</a></Link></li>
                </div>



                <div className="lg:flex hidden items-center justify-center  space-x-4">
                    <div>
                        <Link to='/wishList'>
                            <span className="ml-4 mt-[-3px] absolute w-[14px] text-[12px] flex items-center  h-[14px] justify-center rounded-full bg-[red] text-white">0</span>
                            <span className="text-2xl"><CiHeart /></span>
                        </Link>
                    </div>

                    <div className='' onClick={() => toggle()}>
                        <span className="ml-4 mt-[-4px] absolute w-[14px] text-[12px] flex items-center  h-[14px] justify-center rounded-full bg-[red] text-white cursor-pointer">0</span>
                        <span className="text-2xl cursor-pointer"><IoCartOutline /></span>
                    </div>



                    <div>
                        <Link to='/sign_In'>
                            <button className="py-2 px-6 border border-[#262626] text-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Sign In</button>
                        </Link>
                    </div>

                </div>


            </div>
            <div className='z-20 relative'>
                {
                    open ? <Side_Cart open={open} setOpen={setOpen}></Side_Cart> : ""
                }
            </div>
        </>

    );
};

export default Top_Head;

