import Products_card from "../../Products/Products_card/Products_card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Trendy_collection.css'

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

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

const Trendy_collection = () => {
    var settings = {
        dots:false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 pb-8">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-4xl">Trendy Collection</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">Collect your loves with our newest arrivals.</p>
            </div>


            <div className="py-6 all_card">

                <Slider {...settings}>
                    <div>
                    <Products_card></Products_card>
                    </div>
                    <div>
                    <Products_card></Products_card>
                    </div>
                    <div>
                    <Products_card></Products_card>
                    </div>
                    <div>
                    <Products_card></Products_card>
                    </div>
                    <div>
                    <Products_card></Products_card>
                    </div>
                    
                </Slider>
                
            </div>
        </div>
    );
};

export default Trendy_collection;