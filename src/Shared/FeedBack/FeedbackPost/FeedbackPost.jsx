
import Reviews from "./Reviews/Reviews";

const FeedbackPost = ({userReviews}) => {
    
    return (
        <div>

            <div>
                <div>
                    {
                        userReviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                    }
                </div>
            </div>

        </div>
    );
};

export default FeedbackPost;