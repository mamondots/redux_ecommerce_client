import { useEffect } from "react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import './Instagram.css'

const Instagram = () => {
    const [instes, setInstes] = useState([])
    useEffect(() => {
        fetch('insta.json')
            .then(res => res.json())
            .then(data => {
                setInstes(data)
               console.log(data)
            })
    }, [])
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 pb-8">
            <div className="flex items-center justify-center flex-col py-6 mt-4">
                <h2 className="text-4xl">Follow Us on Instagram</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">@almamon757</p>
            </div>

            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-3">
                {instes.map((insta,index) => <div key={index}>
                     <div className="relative insta_box overflow-hidden">
                          <img className="hover:scale-105 duration-300" src={insta.img} alt="" />
                          <p className="insta_icon text-2xl text-[#fff]"><FaInstagram /></p>
                     </div>
                </div>)}
            </div>
        </div>
    );
};

export default Instagram;