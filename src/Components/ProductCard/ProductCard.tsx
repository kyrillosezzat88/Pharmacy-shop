import './ProductCard.scss'
import { Heart, Repeat, ShoppingCart, Search } from 'react-feather'
import { ProductPorpsTypes } from './ProductCard.types';
import { ReactComponent as StarIcon } from '../../Assets/Images/icons/star.svg'
import { ReactComponent as StarFilledIcon } from '../../Assets/Images/icons/star-filled.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddToCompares, AddToWishlist } from '../../Store/Slices/ProductsSlice';
const ProductCard = ({ name, price, category, image, rate, BtnAction, id }: ProductPorpsTypes) => {
    const disaptch = useDispatch()
    return (
        <div className="Product-Card">
            <Link to={`/products/${id}`}><img src={image} alt="Prod name" /></Link>
            <span className='Product-Card_category'>{category}</span>
            <Link to={`/products/${id}`}><h5 className='Product-Card_name'>{name}</h5></Link>
            <div className="rate flex items-center">
                {Array(rate ? rate : 0).fill(0).map((r, index) => <StarFilledIcon key={index} />)}
                {Array(5 - (rate ? rate : 0)).fill(0).map((r, index) => <StarIcon key={index} />)}
                <span className='ml-2 text-primary_dark text-sm'>{rate ? rate : 0}</span>
            </div>
            <span className='Product-Card_price'>${price}</span>
            <button className='btn-primary-light w-full flex items-center justify-center' onClick={BtnAction}> <ShoppingCart /> <span className='ml-2'>Add To Cart</span></button>
            <div className="Product-Card_actions">
                <Heart size={24} onClick={() => disaptch(AddToWishlist({ name, price, category, image, rate, id }))} />
                <Repeat size={24} onClick={() => disaptch(AddToCompares({ name, price, category, image, rate, id }))} />
                <Search size={24} />
            </div>
        </div >
    )
}

export default ProductCard