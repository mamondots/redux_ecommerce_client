import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8 border-2">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-medium py-1">MamonDots</h2>
                    <p className="text-[#7a7a7a]">Gold & Diamond</p>
                </div>

                <div>
                    <h2 className="text-xl font-medium">About MamonDots</h2>

                    <ul className="py-3 space-y-1 text-[#7a7a7a] cursor-pointer">
                        <li className="hover:text-[#262626] duration-300"><a href="">About Us</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Core Values</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Careers</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Press Releases</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Blog</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Sitemap</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium">Our Company</h2>

                    <ul className="py-3 space-y-1 text-[#7a7a7a] cursor-pointer">
                        <li className="hover:text-[#262626] duration-300"><a href="">Shopping App</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Be an Affiliate</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Advertise Your Product</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Media Enquires</a></li>
                        <li className="hover:text-[#262626] duration-300"><a href="">Other Services</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium">Store Details</h2>

                    <ul className="py-3 space-y-1 text-[#7a7a7a] cursor-pointer">
                        <li><span>Address:</span> <span className="hover:text-[#262626] duration-300">502 New Design Str, Melbourne, Australia</span></li>
                        <li><span>Email:</span> <span className="hover:text-[#262626] duration-300">almamon757@gmail.com</span></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium">Follow Us</h2>
                    <div className="py-3 flex items-center space-x-4 space-y-1 text-[#7a7a7a] cursor-pointer text-xl">
                        <p className="hover:text-[#262626] duration-300"><FaFacebookF /></p>
                        <p className="hover:text-[#262626] duration-300"><FaTwitter /></p>
                        <p className="hover:text-[#262626] duration-300"><FaInstagram /></p>
                        <p className="hover:text-[#262626] duration-300"><FaYoutube /></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;