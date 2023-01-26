import { useState } from 'react'
import { AlignLeft, Repeat, Heart, ShoppingCart, X } from 'react-feather'
import './Navbar.scss';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartMenu from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const { Cart } = useSelector((state: any) => state.Cart)
  const { wishlist, compares } = useSelector((state: any) => state.Products);
  const [OpenCart, setOpenCart] = useState<boolean>(false)
  const navigate = useNavigate();
  return (
    <div className="Navbar border-t-2 border-b-2 py-4 border-primary_light">
      <div className="Navbar_content w-full">
        <div className="CategoriesMenu ">
          <AlignLeft />
          <span className='ml-2'>All Categories</span>
        </div>
        <nav>
          <ul>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <li>Contact us</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="Navbar_icons">
          <div className='compare' onClick={() => navigate('/compare')}>
            <Repeat size={20} />
            <span className='bg-primary'>{compares.length}</span>
          </div>
          <div className="heart" onClick={() => navigate('/wishlist')}>
            <Heart size={20} />
            <span className='bg-tertiary'>{wishlist.length}</span>
          </div>
          <div className="cart" onClick={() => setOpenCart(!OpenCart)}>
            {OpenCart ? <X size={20} /> : <ShoppingCart size={20} />}
            <span className='bg-secondary'>{Cart.length}</span>
            {OpenCart && <CartMenu />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar