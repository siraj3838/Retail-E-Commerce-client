
import Reviews from "./Reviews/Reviews";

// eslint-disable-next-line react/prop-types
const FeedbackPost = ({userReviews}) => {
    
    return (
        <div>

            <div>
                <div>
                    {
                        // eslint-disable-next-line react/prop-types
                        userReviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                    }
                </div>
            </div>

        </div>
    );
};

export default FeedbackPost;