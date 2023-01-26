import { ReviewsPropsTypes } from "./Reviews.types"
import { ReactComponent as StarIcon } from '../../Assets/Images/icons/star.svg'
import { ReactComponent as StarFilledIcon } from '../../Assets/Images/icons/star-filled.svg'

const Reviews = ({ reviews }: ReviewsPropsTypes) => {
    return (
        <div className="Reviews border px-6 py-2 rounded-md shadow-md">
            {reviews.map((review, indx) =>
                <div className="Review border-b py-3 my-3">
                    <div className="Reviews_user flex  justify-between">
                        <div className="flex">
                            <img src={review.user.profileImage} className="w-[50px] mr-4 rounded-full h-[50px]" alt={review.user.name} />
                            <div>
                                <h6 className="text-sm font-PtsBold text-primary_dark">{review.user.name}</h6>
                                <span className="text-sm text-gray-500">{review.createdAt}</span>
                            </div>
                        </div>
                        <div className="rate flex items-center mb-4">
                            {Array(review.starts).fill(0).map((r, index) => <StarFilledIcon key={index} />)}
                            {Array(5 - (review.starts)).fill(0).map((r, index) => <StarIcon key={index} />)}
                        </div>
                    </div>
                    <p className="mt-4 text-base text-gray-500">{review.review}</p>
                </div>
            )}
            {/* Add New REview Form */}
            <form></form>
        </div>
    )
}

export default Reviews