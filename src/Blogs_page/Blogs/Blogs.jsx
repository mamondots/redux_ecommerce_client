import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import img from '../../assets/img/small_blog1.jpg'
import img2 from '../../assets/img/small_blog2.jpg'
import img3 from '../../assets/img/small_blog3.jpg'
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl font-medium">Blog</h2>
                <p className="text-lg text-[#818181] py-2">Click on your neares store location below to set the road on Google Map.</p>
            </div>

            <div className="flex gap-8 py-12">
                <div className="flex gap-4 flex-col">
                    {
                        blogs.map((blog, index) => <div key={index}>
                            <Link to='/blog/1'>
                            <div className="relative mx-2 cursor-pointer">
                                <div>
                                    <img src={blog.img} alt="" />
                                    <p className="px-2 py-1 bg-[#262626] text-[#fff] absolute top-4 left-4 uppercase text-sm">{blog.select}</p>
                                </div>

                                <div className="py-4">
                                    <div className="flex space-x-2">
                                        <h2 className="font-medium">{blog.brand}</h2>
                                        <p>-</p>
                                        <p className="text-[#858585]">{blog.date}</p>
                                    </div>
                                    <p className="py-2 x-12 text-[#858585] w-[120vh]">{blog.description}</p>
                                    <button className="font-medium capitalize continue">continue reading</button>
                                </div>
                            </div>
                            </Link>
                        </div>)
                    }
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
                                <img className="w-[60px] h-[60px] border" src={img} alt="" />
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

export default Blogs;
