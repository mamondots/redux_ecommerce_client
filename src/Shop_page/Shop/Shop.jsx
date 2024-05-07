import { Link } from 'react-router-dom';
import './Shop.css'
import { IoIosArrowForward } from "react-icons/io";
import Categories_list from '../Categories_list/Categories_list';
import Shop_Products from '../Shop_Products/Shop_Products';

const Shop = () => {
    return (
        <div>
            <div className="bg_shop py-20 flex items-center justify-center flex-col">
                 <h2 className='text-4xl font-medium py-2'>Shop</h2>
                 <div className='flex items-center justify-center space-x-2'>
                    <p className='cursor-pointer'><Link to='/'>Home</Link></p>
                    <p className='text-[#707070]'><IoIosArrowForward /></p>
                    <p className='text-[#707070]'>Shop</p>
                 </div>
            </div>

            <div className='py-8'>
                 <div className='flex'>

                     <div className='w-1/3'>
                            <Categories_list></Categories_list>
                     </div>
                     
                     <div className='w-full'>
                            <Shop_Products></Shop_Products>
                     </div>

                 </div>
            </div>
        </div>
    );
};

export default Shop;