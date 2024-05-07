import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

const Banner = () => {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='relative banner'>
            <Slider {...settings}>
                <div className='bg_one xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-28'>
                    <div>
                        <h2 className='text-4xl font-semibold capitalize lg:w-[40%] md:w-[40%] w-full'>Introducing the last day collection</h2>
                        <p className='py-4 text-lg  text-[#646464] font-medium'>Ring, Occasion Pieces, Pandora & more Collection</p>
                        <button className='py-2 border border-[#262626]  px-8 text-lg font-medium my-8'>Shop Now</button>
                    </div>
                </div>

                <div className='bg_two xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-28'>
                    <div>
                        <h2 className='text-4xl font-semibold capitalize  lg:w-[40%] md:w-[40%] w-full'>New S/S 2024 Amazing Collection</h2>
                        <p className='py-4 text-lg  text-[#313131a1] font-medium'>A symbol of love and modern take on gold</p>
                        <button className='py-2 border border-[#262626] px-8 text-lg font-medium my-8'>Shop Now</button>
                    </div>
                </div>

                <div className='bg_three xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-28'>
                    <div>
                        <h2 className='text-4xl font-semibold capitalize lg:w-[40%] md:w-[40%] w-full'>A minimalistic Design Masculine</h2>
                        <p className='py-4 text-lg  text-[#313131a1] font-medium'>Awesome Products for the dynamic urban lifestyle</p>
                        <button className='py-2 border border-[#262626] px-8 text-lg font-medium my-8'>Shop Now</button>
                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default Banner;