import { Link } from "react-router-dom";
import img from '../../assets/img/Single_blog.jpg'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import img1 from '../../assets/img/small_blog1.jpg'
import img2 from '../../assets/img/small_blog2.jpg'
import img3 from '../../assets/img/small_blog3.jpg'
const Single_blog = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10">
            <div className="flex items-center space-x-2">
                <p className="font-medium cursor-pointer"><Link to='/'>Home</Link></p>
                <p className="font-medium">/</p>
                <p className="font-medium cursor-pointer"><Link to='/blogs'>Blogs</Link></p>
                <p className="font-medium">/</p>
                <p className="text-[#a0a0a0]">How to Style a Quiff</p>
            </div>

            <div className="flex  py-12">
                <div className="w-full">
                    <div className="relative mx-2 cursor-pointer">
                        <div>
                            <img src={img} alt="" />
                            <p className="px-2 py-1 bg-[#262626] text-[#fff] absolute top-4 left-4 uppercase text-sm">How to Style a Quiff</p>
                        </div>

                        <div className="py-4">
                            <div className="flex space-x-2">
                                <h2 className="font-medium">mamondots</h2>
                                <p>-</p>
                                <p className="text-[#858585]">FEBRUARY 17, 2023</p>
                            </div>
                            <div className="py-2 x-12 text-[#858585] w-[120vh]">
                                <h2 className="font-medium text-[#262626] py-4">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key performance indicators offline.</h2>

                                <p>
                                    Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline.
                                </p>

                                <p className="py-4">
                                    Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline.
                                </p>

                                <div>
                                    <p className="font-medium text-xl text-[#262626] space-y-2">
                                        <span><BiSolidQuoteLeft /></span>
                                        <span>
                                            Moving into a new year is always excited and a perfect opportunity to reflect on the year we are leaving behind and the new year we are being.
                                        </span>
                                    </p>
                                </div>

                                <p className="py-4">
                                    Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/6 border px-10 py-8">
                    <form className="border w-full py-1 px-2 flex items-center justify-between">
                        <input className="outline-none w-full" type="text" placeholder="Search.." />
                        <p className="text-2xl p-2 bg-[#262626] text-[#fff]"><CiSearch /></p>
                    </form>


                    <div className="py-4">
                        <h2 className="text-xl font-medium">Categories</h2>

                        <div className="py-2 space-y-2 cursor-pointer border-b">
                            <p>Bracelets</p>
                            <p>Charm & Dangles</p>
                            <p>Earnings</p>
                            <p>Fashion</p>
                            <p>Gift Ideas</p>
                            <p>Necklaces</p>
                            <p>Rings</p>
                        </div>
                    </div>

                    <div className="py-4">
                        <h2 className="text-xl font-medium">Recent Posts</h2>

                        <div className="py-6 flex flex-col space-y-3">

                            <div className="flex items-center space-x-4 border-b pb-4">
                                <img className="w-[60px] h-[60px] border" src={img1} alt="" />
                                <div className="text-lg">
                                    <h2 className="font-medium">Christmas Gift Guide</h2>
                                    <p className="text-[#969696]">FEBRUARY 17, 2024</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 border-b pb-4">
                                <img className="w-[60px] h-[60px] border" src={img2} alt="" />
                                <div className="text-lg">
                                    <h2 className="font-medium">How to Style a Quiff</h2>
                                    <p className="text-[#969696]">FEBRUARY 20, 2024</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 border-b pb-4">
                                <img className="w-[60px] h-[60px] border" src={img3} alt="" />
                                <div className="text-lg">
                                    <h2 className="font-medium">Selective Styles Help your</h2>
                                    <p className="text-[#969696]">FEBRUARY 18, 2023</p>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="mt-[-12px]">
                        <h2 className="text-xl font-medium">Tags</h2>

                        <div className="flex items-center gap-2 flex-wrap py-2">
                            <p className="px-2 py-1 border font-medium text-[#444444] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Accessories</p>
                            <p className="px-2 py-1 border font-medium text-[#444444] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Collections</p>
                            <p className="px-2 py-1 border font-medium text-[#444444] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Fashion</p>
                            <p className="px-2 py-1 border font-medium text-[#444444] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Jewelry</p>
                            <p className="px-2 py-1 border font-medium text-[#444444] hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">Trends</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Single_blog;