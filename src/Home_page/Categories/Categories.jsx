import img from '../../assets/img/Charm-Dangles.jpg'
import img2 from '../../assets/img/Cross-of-Light.jpg'
import img3 from '../../assets/img/Gift.jpg'
import img4 from '../../assets/img/Rings.jpg'
import img5 from '../../assets/img/Rose-Gold-Bracelet.jpg'
import img6 from '../../assets/img/Sterling-Silver-Dangles-Earrings.jpg'
import './Categories.css'
const Categories = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <h2 className="flex items-center justify-center text-3xl font-medium">Popular Categories</h2>

            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-6 mt-4'>
                <div>
                    <div><img className='border cursor-pointer hover:shadow duration-300' src={img} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Charm & Dangles</h2>
                </div>

                <div>
                    <div><img className='border cursor-pointer hover:shadow' src={img2} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Necklaces</h2>
                </div>

                <div>
                    <div><img className='border cursor-pointer hover:shadow' src={img3} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Gift Ideas</h2>
                </div>

                <div>
                    <div><img className='border cursor-pointer hover:shadow' src={img4} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Rings</h2>
                </div>

                <div>
                    <div><img className='border cursor-pointer hover:shadow' src={img5} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Bracelets</h2>
                </div>

                <div>
                    <div><img className='border cursor-pointer hover:shadow' src={img6} alt="" /></div>
                    <h2 className='text-center uppercase py-3 font-medium categories_title cursor-pointer'>Earnings</h2>
                </div>

            </div>
        </div>
    );
};

export default Categories;