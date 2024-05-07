

const Subscribe = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <div className="flex items-center justify-center flex-col py-6 mt-4">
                <h2 className="text-4xl">Subscribe Newsletter</h2>
                <p className="py-2 font-medium text-[#767676] text-lg">Sing up to our Newsletter and get the discount code.</p>
            </div>

            <div>
                 <form className="flex items-center justify-center gap-4 pb-8">
                    <input className="py-2 px-4 border-2 border-[#262626] outline-none lg:w-[60%] md:w-[50%] sm:w-[40%]" type="text" placeholder="Email Address" />
                    <input className="px-6 py-2 uppercase bg-[#262626] text-[#fff] border-2 border-[#262626] cursor-pointer" type="submit" value="subscribe" />
                 </form>
            </div>
        </div>
    );
};

export default Subscribe;