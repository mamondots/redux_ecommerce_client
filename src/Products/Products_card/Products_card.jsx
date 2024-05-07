import { Rating } from '@smastrom/react-rating';
import product from '../../assets/img/products.jpg'
import { IoCartSharp } from "react-icons/io5";
import '@smastrom/react-rating/style.css'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import './Products_card.css'
import QuickView_Products from '../QuickView_Products/QuickView_Products';
import { Link } from 'react-router-dom';

const Products_card = () => {
    return (
        <div className='px-2'>
            <div className='border relative img_product'>
                <img className='' src={product} alt="" />
                <div className='cart space-y-2'>
                    <div className='flex items-center space-x-2 cart_box'>
                        <p className='add_cart'>Add to Wishlist</p>
                        <p className='px-1 py-1 border text-xl text-[#262626] hover:bg-[#262626] 
                        hover:text-[#fff] duration-300 cursor-pointer cart_hover'><CiHeart /></p>
                    </div>

                    <div className='flex items-center space-x-2 cart_box'>
                        <p className='ml-6 add_cart'>Add to Cart</p>
                        <p className='px-1 py-1 border text-xl text-[#262626] hover:bg-[#262626] 
                        hover:text-[#fff] duration-300 cursor-pointer absolute right-0'><IoCartOutline /></p>
                    </div>

                    <div className='flex items-center space-x-2 cart_box'>
                        <p className='ml-6 add_cart'>Quick View</p>
                        <p className='px-1 py-1 border text-xl text-[#262626] hover:bg-[#262626] 
                        hover:text-[#fff] duration-300 cursor-pointer absolute right-0'><QuickView_Products></QuickView_Products></p>
                    </div>

                </div>
            </div>
            <Link to='/products/1'>
                <div className='p-2'>
                    <p className='uppercase text-[14px] text-[#949494]'>Earnings</p>
                    <p className='text-lg font-medium py-1'>Birds of Paradise Pendant</p>
                    <p>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={4.5}
                            readOnly
                        />
                    </p>
                    <div className='flex items-center space-x-4 py-2'>
                        <p className='font-medium'>$102.00</p>
                        <p className='text-sm'>$120.00</p>
                    </div>
                    <button className='flex text-sm items-center space-x-2 uppercase border border-[#262626] font-medium py-2 px-4 my-2 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer'><span className='text-xl'></span><span>view details</span></button>
                </div>
            </Link>



        </div>
    );
};

export default Products_card;