import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import GridView_products from "./GridView_products/GridView_products";
import { useState } from "react";
import ListView_Products from "./ListView_Products/ListView_Products";


const Shop_Products = () => {

    const [view, setView] = useState(true)

    const handleGrid = () =>{
        setView(true)
    }
    const handleList = () =>{
        setView(false)
    }
    return (
        <div className="px-8">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">1 – 12 products of 34 products</h2>
                <div className="flex items-center">
                    <div className="flex items-center mx-10 space-x-2">
                        <p className="font-medium">Sort by</p>
                        <div className="flex items-center">
                            <select className="outline-none">
                                <option value="">Default Sorting</option>
                                <option value="">Sort by latest</option>
                                <option value="">Sort by price: low to high</option>
                                <option value="">Sort by price: high to low</option>

                            </select>
                        </div>
                    </div>

                    <div className="flex items-center text-xl font-bold space-x-3 cursor-pointer">
                        <p onClick={handleGrid} className={view? "border p-1 bg-[#262626] text-[#fff] duration-300":"border p-1 hover:bg-[#262626] hover:text-[#fff] duration-300"}><IoGridOutline /></p>
                        <p onClick={handleList} className={view? "border p-1 hover:bg-[#262626] hover:text-[#fff] duration-300":"border p-1 bg-[#262626] text-[#fff] duration-300"}><FaList /></p>
                    </div>
                </div>
            </div>


            <div>
                {
                    view ?
                        <>
                            <GridView_products></GridView_products>
                        </>
                        :
                        <>
                            <ListView_Products></ListView_Products>
                        </>
                }

            </div>
        </div>
    );
};

export default Shop_Products;