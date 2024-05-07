import brand from '../../assets/img/brand.jpg'
import brand2 from '../../assets/img/brand2.jpg'

const Brand_box = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 pb-8">
            <div className='grid lg:grid-cols-2 gap-4'>
                <div className='relative'>
                    <div className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-105 duration-300' src={brand} alt="" />
                    </div>

                    <div className='m-12 absolute top-0'>
                        <p className=' text-[#575757] uppercase'>2024 fashion</p>
                        <h2 className='text-2xl capitalize lg:w-[70%] w-full py-2'>new bangla collection</h2>
                        <p className='uppercase font-medium pt-4 see_btn cursor-pointer'>see more</p>
                    </div>

                </div>

                <div className='relative'>
                    <div className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-105 duration-300' src={brand2} alt="" />
                    </div>

                    <div className='m-12 absolute top-0'>
                        <p className=' text-[#575757] uppercase'>2024 fashion</p>
                        <h2 className='text-2xl capitalize lg:w-[70%] w-full py-2'>just lunched desk the hals</h2>
                        <p className='uppercase font-medium pt-4 see_btn cursor-pointer'>see more</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Brand_box;