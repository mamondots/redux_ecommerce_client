import { CiSearch } from "react-icons/ci";


const Menu_Bar = () => {
    return (
        <div className="lg:flex items-center justify-center pt-4">
            <div>
                <form className="flex items-center justify-center border border-[#969696] xl:w-[120vh] lg:w-[120vh]  w-full">
                    <input type="text" className="outline-none text-lg px-4  w-full" placeholder="Search Products.." />
                    <span className="bg-[#262626] text-xl text-[#fff] px-4 py-3 cursor-pointer hover:bg-[#969696] hover:text-[#262626] duration-300"><CiSearch /></span>
                </form>
            </div>
        </div>
    );
};

export default Menu_Bar;