import firstImg from '../../assets/img/short_banner.jpg'
import firstImg2 from '../../assets/img/short_banner2.jpg'
import firstImg3 from '../../assets/img/short_banner3.jpg'
import './Short_banner.css'
const Short_banner = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>

                <div className='relative'>
                    <div className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-105 duration-300' src={firstImg3} alt="" />
                    </div>
                    <div className='m-12 absolute top-0'>
                        <p className=' text-[#575757] uppercase'>2024 fashion</p>
                        <h2 className='text-2xl capitalize lg:w-[70%] w-full py-2'>just lunched desk the hals</h2>
                        <p className='uppercase font-medium pt-4 see_btn cursor-pointer'>see more</p>
                    </div>
                </div>

                <div className='relative'>
                    <div className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-105 duration-300' src={firstImg2} alt="" />
                    </div>
                    <div className='m-12 absolute top-0'>
                        <p className=' text-[#575757] uppercase'>flat discount</p>
                        <h2 className='text-2xl capitalize lg:w-[70%] w-full py-2'>necklaces & body jewels</h2>
                        <p className='uppercase font-medium pt-4 see_btn cursor-pointer'>shop now</p>
                    </div>
                </div>

                <div className='relative'>
                    <div className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-105 duration-300' src={firstImg} alt="" />
                    </div>
                    <div className='m-12 absolute top-0'>
                        <p className='text-[#fff] uppercase'>new collection</p>
                        <h2 className='text-2xl text-[#fff] capitalize lg:w-[75%] w-full py-2'>jewelry & charm rings</h2>
                        <p className='uppercase font-medium pt-4 see_btn3 cursor-pointer text-[#fff]'>shop now</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Short_banner;