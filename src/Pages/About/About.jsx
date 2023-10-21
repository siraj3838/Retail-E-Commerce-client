import { AiFillApple } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';
const About = () => {
    return (
        <div className="bg-white mt-16">
            <div className="max-w-screen-xl mx-auto">
                <div className='px-4 lg:px-0'>
                    <div className="w-48 py-3 text-center rounded-3xl border mx-auto bg-blue-200">
                        <h2 className="text-xl font-bold text-blue-400">
                            Toucan APP</h2>
                    </div>
                    <h2 className="text-center
                    text-3xl lg:text-6xl font-bold mt-6 text-[#162060]">
                        Check Our Mobile Application
                    </h2>
                </div>
                <div className="flex-col-reverse md:flex justify-center gap-3 lg:gap-10 items-center py-16">
                    <div className="">
                        <div>
                            <img className="w-72 h-72 rounded-full" src="https://i.ibb.co/HN0F2jQ/images-2.png" alt="" />
                        </div>
                    </div>
                    <div className="text-right space-y-3">
                        <div>
                            <button className="bg-[#162060] text-white rounded-lg"><div className="p-1 md:px-4 md:py-5 flex items-center lg:gap-3 gap-1">
                                <span className="text-xs lg:text-base">Download From</span><span className="text-xl lg:text-2xl font-extrabold">Apple Store</span><AiFillApple className='text-4xl'></AiFillApple></div></button>
                        </div>
                        <div>
                            <button className="bg-[#162060] text-white rounded-lg"><div className="p-1 md:px-4 md:py-5 flex items-center gap-3 lg:gap-[22px]">
                                <span className="text-xs lg:text-base">Download From</span><span className="text-xl lg:text-2xl font-extrabold">Play Store</span><BiLogoPlayStore className='text-4xl'></BiLogoPlayStore></div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;