import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

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

const Feed_back = () => {

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

    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('testimonal.json')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data)
            })
    }, [])

    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8 bg-[#EDE3E2]">
            <div className="flex items-center justify-center flex-col py-6 mt-4">
                <h2 className="text-4xl">Customer Review</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">Collect your loves with our Summer arrivals.</p>
            </div>

            <div>
                <div className="pb-6 all_card">

                    <Slider {...settings}>
                        {
                            feedbacks.map((feedback, index) => <div key={index}>
                                <div className="bg-[#FFFFFF] mx-2 p-8">
                                    <p className="px-3 py-3 rounded-full bg-[#262626] text-[#fff] inline-block"><FaQuoteLeft /></p>
                                    <h2 className="text-xl font-medium capitalize">{feedback.title}</h2>
                                    <p className="text-[#6d6d6d]">{feedback.description}</p>
                                    <div className="py-2 flex items-center justify-between">
                                        <h2 className="text-xl">{feedback.admin_name}</h2>
                                        <p>
                                            <Rating
                                                style={{ maxWidth: 80 }}
                                                value={feedback.rating}
                                                readOnly
                                            />
                                        </p>
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

export default Feed_back;
