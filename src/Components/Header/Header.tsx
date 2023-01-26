import { useEffect, useState } from 'react'
import Logo from '../../Assets/Images/logo.png'
import { Search, PhoneCall, Menu } from 'react-feather'
import './Header.scss'
import Select from '../Form/Select/Select'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const CategoriesList = [
        { title: "CategoryOne", id: 1 },
        { title: "CategoryTwo", id: 2 },
        { title: "CategoryThree", id: 3 },
        { title: "CategoryFour", id: 4 },
    ]
    useEffect(() => {
        window.onclick = () => {
            setOpenMenu(false)
        }
    })
    return (
        <header>
            {openMenu && <MobileMenu />}
            <Link to='/' className="logo hidden md:flex"><img src={Logo} alt="Pharmacy Logo" /></Link>
            <div className='flex justify-between items-center w-full md:hidden'>
                <Link to='/' className="logo"><img src={Logo} alt="Pharmacy Logo" /></Link>
                <Menu onClick={(e) => { e.stopPropagation(); setOpenMenu(true) }} />
            </div>
            <form>
                <Select options={CategoriesList} className='w-[20%]' />
                <input className='inpt_primary w-full h-[45px]' type="text" placeholder='What are you looking for ?' />
                <button type='submit' className='btn-tertiary'><Search /></button>
            </form>
            <div className='support'>
                <PhoneCall color='#15A9E3' />
                <div className='ml-2'>
                    <p className='support_text'>Sales & Service Support</p>
                    <span className='support_phone '>986-456-6782</span>
                </div>
            </div>
        </header>
    )
}

export default Header