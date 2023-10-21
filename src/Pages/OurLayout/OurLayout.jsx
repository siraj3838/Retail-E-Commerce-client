
const OurLayout = () => {
    return (
        <div className="my-10">
            <h3 className="py-6 text-5xl font-bold italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text text-center">Our Layouts</h3>
            <div className="mx-5 lg:mx-0 mt-5">
                <div className="max-w-screen-xl mx-auto">
                    <div className="hero h-[500px] w-full" style={{ backgroundImage: 'url(https://i.ibb.co/gdQ0BGs/11300260-4685339.jpg)' }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
                <h2 className="text-center text-3xl lg:text-5xl font-bold my-10"><span className="text-accent">4 Predefined</span> Layouts / <span className="text-accent">4 Presets</span> Color</h2>
                <div>
                    {/* first section */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 shadow-2xl items-center gap-4 bg-[#5ebed247]">
                            <div>
                                <img className="w-full" src="https://i.ibb.co/dtzzGG2/home1.jpg" alt="" />
                            </div>
                            <div className="space-y-2 md:space-y-10 lg:space-y-8">
                                <h2 className="text- md:text-2xl font-semibold">Home Layout 01</h2>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Page Layout 01</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Header Style 1</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Layout Style : Full Width</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">4 Presets Color</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Preset 01 Default <span className="text-[#20cfc5]">#20cfc5</span></h4>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 shadow-2xl items-center gap-4 bg-[#5ebed247]">
                            <div>
                                <img className="w-full" src="https://i.ibb.co/PmnbZcx/home2.jpg" alt="" />
                            </div>
                            <div className="space-y-2 md:space-y-10 lg:space-y-8">
                                <h2 className="text- md:text-2xl font-semibold">
                                    Home Layout 02</h2>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Page Layout 02</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Header Style 2</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Layout Style : Full Width</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">4 Presets Color</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Preset 02 Default  <span className="text-[#90ca1d]">#90ca1d</span></h4>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 shadow-2xl items-center gap-4 bg-[#5ebed247]">
                            <div>
                                <img className="w-full" src="https://i.ibb.co/DLhjxqD/home3.jpg" alt="" />
                            </div>
                            <div className="space-y-2 md:space-y-10 lg:space-y-8">
                                <h2 className="text- md:text-2xl font-semibold">Home Layout 03</h2>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Page Layout 03</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Header Style 3</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Layout Style : Box</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">4 Presets Color</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Preset 03 Default <span className="text-[#e66b3c]"> #e66b3c</span></h4>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 shadow-2xl items-center gap-4 bg-[#5ebed247]">
                            <div>
                                <img className="w-full" src="https://i.ibb.co/VvcxG45/home4.jpg" alt="" />
                            </div>
                            <div className="space-y-2 md:space-y-10 lg:space-y-8">
                                <h2 className="text- md:text-2xl font-semibold">Home Layout 04</h2>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Page Layout 04</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Header Style 4</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Layout Style : Box</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">4 Presets Color</h4>
                                <h4 className="text-blue-700 font-medium text-sm md:text-base">Preset 01 Default <span className="text-[#e573b0]"> #e573b0</span></h4>
                            </div>
                        </div>
                        {/* end */}
                    </div>

                    {/* second section */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default OurLayout;