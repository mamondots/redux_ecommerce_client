
import { IoMdHome } from "react-icons/io";

const Find_shop = () => {
    return (
        <div className="bg-[#F9EBFA] flex items-center justify-center py-6 space-x-2">
            <p className="text-2xl"><IoMdHome /></p>
            <h2 className="text-2xl font-medium">Find Jewelry Shops Near You</h2>
            <button className="py-2 px-6 border border-[#262626] ml-2 text-lg font-medium hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Find Store</button>
        </div>
    );
};

export default Find_shop;