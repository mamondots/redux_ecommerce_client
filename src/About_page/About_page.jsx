import singniture from '../assets/img/Signatire.png'
import img from '../assets/img/shop-page-title-bg.png'
import side_img from '../assets/img/about-us-1-image-3.jpg'
import { FaLocationArrow } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHappy } from 'react-icons/io';

const About_page = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl font-medium">About Our Online Store</h2>
                <p className="text-lg text-[#818181] py-2">Mamondots providing rare & beautiful items sourced both locally & globally.</p>
            </div>

            <div className='py-4'>
                <img className='' src={img} alt="" />
            </div>

            <div className='lg:flex gap-4 py-6'>
                <div className='lg:w-2/6'>
                    <h2 className='text-4xl font-semibold'>Our Story</h2>
                </div>

                <div className='w-full'>
                    <h2 className='text-xl font-medium'>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black has been the industry’s standard dummy text ever since the 1500s.
                    </h2>

                    <p className='py-4 text-[#717171]'>
                        Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                    </p>

                    <p className='text-[#717171]'>
                        To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich.
                    </p>

                    <img className='py-6' src={singniture} alt="" />
                </div>
            </div>


            <div className='lg:flex w-full'>
                <div className='lg:w-[50%]'>
                    <img src={side_img} alt="" />
                </div>

                <div className='lg:w-[50%] bg-[#F5F5F5] px-12 py-12 space-y-2'>
                    <div>
                        <h2 className='text-2xl font-medium'>Our Mission</h2>
                        <p className='text-[#717171] py-4'>By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.</p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium'>Our Vision</h2>
                        <p className='text-[#717171] py-4'>We were supposed to head to California this weekend but last minute had to cancel and I’m so bummed I was so ready for the beach!! These pictures were from last weekend when the weather.</p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 border-b py-8">

                <div className="text-center flex items-center flex-col space-y-2">
                    <p className="text-2xl"><IoMdHappy /></p>
                    <h2 className="font-medium text-xl">Happy Customer</h2>
                    <p className="text-[#727272]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="text-center flex items-center flex-col space-y-2">
                    <p className="text-2xl"><FaLocationArrow /></p>
                    <h2 className="font-medium text-xl">Free Shipping</h2>
                    <p className="text-[#727272]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="text-center flex items-center flex-col space-y-2">
                    <p className="text-2xl"><FaRegHeart /></p>
                    <h2 className="font-medium text-xl">Made With Love</h2>
                    <p className="text-[#727272]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur.</p>
                </div>

            </div>
        </div>
    );
};

export default About_page;