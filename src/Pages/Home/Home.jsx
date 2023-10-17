import HomeBanner from "../../Shared/HomeBanner/HomeBanner";
import MarqueeSlider from "../../Shared/Marquee/MarqueeSlider";
import SecondBanner from "../../Shared/SecondBanner/SecondBanner";
import BrandCard from "./BrandCard/BrandCard";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BrandCard></BrandCard>
            <SecondBanner></SecondBanner>
            <MarqueeSlider></MarqueeSlider>
        </div>
    );
};

export default Home;