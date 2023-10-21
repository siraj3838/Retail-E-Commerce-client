
import HomeBanner from "../../Shared/HomeBanner/HomeBanner";
import MarqueeSlider from "../../Shared/Marquee/MarqueeSlider";
import SecondBanner from "../../Shared/SecondBanner/SecondBanner";
import BrandCard from "./BrandCard/BrandCard";
import FeedBack from "../../Shared/FeedBack/FeedBack";
import FeedbackPost from "../../Shared/FeedBack/FeedbackPost/FeedbackPost";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const feedbackData = useLoaderData();
    const [userReviews, setUserReviews] = useState(feedbackData);
    const {user} = useContext(AuthContext);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BrandCard></BrandCard>
            <SecondBanner></SecondBanner>
            {
                user && <FeedbackPost setUserReviews={setUserReviews} userReviews={userReviews}></FeedbackPost>
            }
            {
                user && <FeedBack></FeedBack>
            }
            <MarqueeSlider></MarqueeSlider>
        </div>
    );
};

export default Home;