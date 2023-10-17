import Marquee from "react-fast-marquee";
const MarqueeSlider = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-5">
            <Marquee speed={140}>
                <div className="">
                <img src="https://i.ibb.co/7Q1WWT2/01-elementor.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">Elementor Builder</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/Y3DMb9y/02-woo-Commerce.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">WooCommerce Integration</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/gdFG7TS/03-one-click-demo-installation.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">One Click Demo Installation</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/Jsrd8xF/04-contact-form-7.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">Contact Form 7</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/3dM6yVH/05-build-with-seo.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">SEO Friendly</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/sjtMTmv/06-high-speed-performance.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">High Speed Performance</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/k89G69x/07-wpml-compatible.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">WPML Compatible</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/x2w3brH/08-unlimited-color.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">Unlimited Color</h3>
                </div>
                <div>
                <img src="https://i.ibb.co/RpdFdd0/09-google-fonts.jpg" alt="" />
                <h3 className="text-center text-2xl font-bold">600+ Google Fonts</h3>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;