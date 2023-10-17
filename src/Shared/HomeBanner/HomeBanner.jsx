
const HomeBanner = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero h-[500px] w-full" style={{ backgroundImage: 'url(https://i.ibb.co/YZM1vzc/pexels-andrea-piacquadio-3769747.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Create Your Shop With Toucan</h1>
                        <p className="mb-5 text-gray-400">We have given you different brands and different products. We give you the facility of easy purchase. If you buy products from our shop, you will surely get the facility of fast delivery.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;