import HomeBanner from "../../Shared/HomeBanner/HomeBanner";
import MarqueeSlider from "../../Shared/Marquee/MarqueeSlider";
import SecondBanner from "../../Shared/SecondBanner/SecondBanner";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <SecondBanner></SecondBanner>
            <MarqueeSlider></MarqueeSlider>
        </div>
    );
};

export default Home;