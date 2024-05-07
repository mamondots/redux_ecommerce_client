import { RiMapPinLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";

const Contact_page = () => {
    return (
        <div className="py-8">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl font-medium">Contact</h2>
                <p className="text-lg text-[#818181] py-2">Click on your neares store location below to set the road on Google Map.</p>
            </div>

            <div className="w-full map mt-8">
                <iframe className="w-full h-[65vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.405288415175!2d90.33325871980291!3d23.794561332934272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714978360290!5m2!1sen!2sbd"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8 mt-4">
                    <div className="grid lg:grid-cols-3 gap-4 border-b pb-8">

                         <div className="text-center flex items-center flex-col space-y-2">
                                <p className="text-2xl"><RiMapPinLine /></p>
                                <h2 className="font-medium">OUR STORE</h2>
                                <p className="text-[#727272]">7021 Washington SQ.</p>
                                <p className="text-[#727272]">South New York, NY 10012</p>
                         </div>

                         <div className="text-center flex items-center flex-col space-y-2">
                                <p className="text-2xl"><FaPhoneAlt /></p>
                                <h2 className="font-medium">CONTACT INFO</h2>
                                <p className="text-[#727272]">Telephone: 703.172.3412</p>
                                <p className="text-[#727272]">E-mail: hello@example.com</p>
                         </div>

                         <div className="text-center flex items-center flex-col space-y-2">
                                <p className="text-2xl"><BsStopwatch /></p>
                                <h2 className="font-medium">BUSNESS HOURS</h2>
                                <p className="text-[#727272]">Monday - Sunday:</p>
                                <p className="text-[#727272]">09:00 am - 20:00 pm</p>
                         </div>
                         
                    </div>

                    <div>
                         <h2 className="py-8 text-center text-3xl">Have an question? Contact us!</h2>

                         <div className="px-60">
                             <form className="flex  gap-6 flex-col justify-center">
                                <div className="gap-6 w-full flex ">
                                    <input  className="border py-2 px-2 outline-none w-full" type="text" placeholder="Name" />
                                    <input className="border py-2 px-2 outline-none w-full" type="email" placeholder="Email" />
                                </div>
                                <input className="border py-2 px-2 outline-none" type="text" placeholder="Subject" />
                                <textarea className="border py-2 px-2 outline-none" name="" id="" cols="30" rows="6" placeholder="Write your comment"></textarea>

                                <input className="w-full py-2 px-2 bg-[#262626] text-[#fff] font-medium cursor-pointer" type="submit" value="Send Message" />
                             </form>
                         </div>
                    </div>
            </div>
        </div>
    );
};

export default Contact_page;
