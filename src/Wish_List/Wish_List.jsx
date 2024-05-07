
import { FaXmark } from "react-icons/fa6";
import img from '../assets/img/Rings.jpg'
const Wish_List = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <h2 className="flex items-center justify-center text-3xl font-medium">Wishlist</h2>

            <div className=" border-b">
                <div className="flex items-center justify-between px-40 py-4 font-medium">
                    <p>	Product name</p>
                    <p>	Unit price</p>
                    <p>	Stock status</p>
                </div>
            </div>

            <div className="flex items-center justify-between py-2 ">
                <div className="flex items-center space-x-2">
                    <p className="px-2 py-2 bg-[#d9d9d9] hover:bg-[#262626] rounded-full hover:text-[#fff] duration-300 cursor-pointer"><FaXmark /></p>
                    <img className="w-[80px] h-[80px]" src={img} alt="" />
                </div>

                <p>Honey Comb Lace Heart Earrings</p>
                <p className="font-bold">$144.00</p>
                <p className="text-[#2AE972]">	In Stock</p>
                <button className="px-6 py-2 text-[#fff] bg-[#262626]  cursor-pointer">Add to Cart</button>
            </div>
        </div>
    );
};

export default Wish_List;