import { useLoaderData } from "react-router-dom";
import HomeBanner from "../../Shared/HomeBanner/HomeBanner";
import MarqueeSlider from "../../Shared/Marquee/MarqueeSlider";
import SecondBanner from "../../Shared/SecondBanner/SecondBanner";
import BrandCard from "./BrandCard/BrandCard";

const Home = () => {
    const brandCard = useLoaderData();
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BrandCard brandCard={brandCard}></BrandCard>
            <SecondBanner></SecondBanner>
            <MarqueeSlider></MarqueeSlider>
        </div>
    );
};

export default Home;