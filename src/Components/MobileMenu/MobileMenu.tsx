import { useState } from 'react'
import { Link } from "react-router-dom"
import './MobileMenu.scss';
import { PhoneCall } from 'react-feather'
const MobileMenu = () => {
    const [Shop, setShop] = useState<boolean>(false)
    return (
        <section className="MobileMenu" >
            <div className="MobileMenu_content" onClick={(e) => e.stopPropagation()}>
                <div className="container">
                    <div className="header">
                        <button className={`btn-primary${!Shop ? "" : "-light"} w-full`} onClick={() => setShop(false)}>Menu</button>
                        <button className={`btn-primary${Shop ? "" : "-light"} w-full`} onClick={() => setShop(true)}>Shop</button>
                    </div>
                    {Shop ?
                        <div id='Shop'>
                            <ul className="List ">
                                <li>Baby</li>
                                <li>Beauty</li>
                                <li>Medicines</li>
                                <li>Personal Care</li>
                                <li>Pets</li>
                                <li>Supplemets</li>
                                <li>Sports Nutritions</li>
                            </ul>
                        </div>
                        :
                        <div id="Menu">
                            <ul className="List ">
                                <li>Home</li>
                                <Link to='/shop'><li>Shop</li></Link>
                                <li>Contact us</li>
                                <li>About Us</li>
                            </ul>
                            <button className="btn-primary-light w-full flex items-center"><PhoneCall size={18} className='mr-2' />Sales & Service Support</button>
                            <p className='text-sm mt-6 text-gray-500 text-center'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
                        </div>}

                </div>
            </div>
        </section>
    )
}

export default MobileMenu