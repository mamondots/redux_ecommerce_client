import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { useEffect, useState } from "react";
import './Blog.css'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrows arrow-next" onClick={onClick}>
            <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrows arrow-prev" onClick={onClick}>
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

const Blog = () => {

    var settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 pb-8 ">
            <div className="flex items-center justify-center flex-col py-6 mt-4">
                <h2 className="text-4xl">Read Journal</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">Latest trends and inspirations in fashion design.</p>
            </div>

            <div>
                <div className="pb-6 all_card">

                    <Slider {...settings}>
                        {
                            blogs.map((blog, index) => <div key={index}>
                               <div className="mx-2 relative">
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
                                       <p className="py-2 text-[#858585]">{blog.description}..</p>
                                       <button className="font-medium capitalize continue">continue reading</button>
                                   </div>
                               </div>
                            </div>)
                        }
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default Blog;
