import ReactSlider from "react-slider";
import './Categories_list.css'

const Categories_list = () => {
    return (
        <div className="px-6 py-4 bg-[#F5F5F5] border">
            <div>
                <h2 className="text-xl font-medium">Categories</h2>

                <div className="py-2 space-y-2 cursor-pointer border-b">
                    <p>Bracelets</p>
                    <p>Charm & Dangles</p>
                    <p>Earnings</p>
                    <p>Fashion</p>
                    <p>Gift Ideas</p>
                    <p>Necklaces</p>
                    <p>Rings</p>
                </div>
            </div>

            <div className="py-4 border-b">
                <h2 className="text-xl font-medium">Pricing Filter</h2>

                <div className="">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[50, 1000]}
                        max={1000}
                        min={50}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    />

                    <div className="pt-12 flex items-center justify-between">
                        <p className="py-2 px-6 bg-[#262626] text-[#fff] cursor-pointer">Filter</p>
                        <div className="flex items-center space-x-2">
                            <h2>Price:</h2>
                            <div className="flex items-center  text-sm">
                                <p>$20</p>
                                <p>—</p>
                                <p>$150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <h2 className="text-xl font-medium">Material</h2>

                <div className="py-2 space-y-2 cursor-pointer border-b">


                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Gold</p>
                        </div>
                        <p className="text-[#8a8a8a]">4</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Silver</p>
                        </div>
                        <p className="text-[#8a8a8a]">6</p>
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Bronze</p>
                        </div>
                        <p className="text-[#8a8a8a]">8</p>
                    </div>


                </div>
            </div>


            <div className="border-b pb-2">
                <h2 className="text-xl font-medium">Colors</h2>

                <div className="py-2 pb-2 flex items-center space-x-4 cursor-pointer">
                    <p className="px-3 py-3 rounded-full bg-[#262626] cursor-pointer"></p>
                    <p className="px-3 py-3 rounded-full bg-[#D0B866] cursor-pointer"></p>
                    <p className="px-3 py-3 rounded-full bg-[#1D73BE] cursor-pointer"></p>
                    <p className="px-3 py-3 rounded-full bg-[#FF554E] cursor-pointer"></p>
                    <p className="px-3 py-3 rounded-full bg-[#99C1A9] cursor-pointer"></p>
                    <p className="px-3 py-3 rounded-full bg-[#21394E] cursor-pointer"></p>

                </div>
            </div>


            <div className="py-4">
                <h2 className="text-xl font-medium">Collection</h2>

                <div className="py-2 space-y-2 cursor-pointer">


                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Art by Saviola</p>
                        </div>
                        <p className="text-[#8a8a8a]">2</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Middle of North</p>
                        </div>
                        <p className="text-[#8a8a8a]">1</p>
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Modern</p>
                        </div>
                        <p className="text-[#8a8a8a]">4</p>
                    </div>


                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" id="" />
                            <p>Originals</p>
                        </div>
                        <p className="text-[#8a8a8a]">3</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Categories_list;