import { useState } from 'react';
import './Featured_Products.css'
import New_Arrive from './New_Arrive/New_Arrive';
import Featured from './Featured/Featured';
import Best_seller from './Best_seller/Best_seller';

const Featured_Products = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-4xl">Featured Products</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">Collect your loves with our Summer arrivals.</p>
            </div>

            <div className='flex items-center justify-center space-x-8 py-4 text-lg font-medium text-[#262626] cursor-pointer'>
                <div
                    onClick={() => toggleTab(1)} className={toggle === 1 ? "tabs active-tabs" : "tabs"}>
                    New Arrivals
                </div>

                <div
                    onClick={() => toggleTab(2)} className={toggle === 2 ? "tabs active-tabs" : "tabs"}>
                    Featured
                </div>

                <div
                    onClick={() => toggleTab(3)} className={toggle === 3 ? "tabs active-tabs" : "tabs"}>
                    Best Seller
                </div>
            </div>

            <div className="contents-tabs mt-6">
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <New_Arrive></New_Arrive>
                </div>
                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <Featured></Featured>
                </div>
                <div className={toggle === 3 ? "content active-content" : "content"}>
                    <Best_seller></Best_seller>
                </div>
            </div>
        </div>
    );
};

export default Featured_Products;