import { Link } from 'react-router-dom'
import { ProductThumbPropsTypes } from './ProductThumbnail.types'
import { ReactComponent as StarIcon } from '../../Assets/Images/icons/star.svg'
import { ReactComponent as StarFilledIcon } from '../../Assets/Images/icons/star-filled.svg'
const ProductThumbnail = ({ name, image, price, rate, ProLink }: ProductThumbPropsTypes) => {
    return (
        <Link to={ProLink} className="ProductThumbnail flex items-center">
            <img src={image} alt="ProductImg" width='106px' className='rounded-xl' />
            <div className='ml-4'>
                <div className="rate flex items-center">
                    {Array(rate ? rate : 0).fill(0).map((r, index) => <StarFilledIcon key={index} />)}
                    {Array(5 - (rate ? rate : 0)).fill(0).map((r, index) => <StarIcon key={index} />)}
                    <span className='ml-2 text-primary_dark text-sm'>{rate ? rate : 0}</span>
                </div>
                <h3 className='text-base font-PtsBold text-primary_dark hover:text-primary'>{name}</h3>
                <span className="font-PtsBold text-sm text-primary_dark block mt-2">${price}</span>
            </div>
        </Link>
    )
}

export default ProductThumbnail