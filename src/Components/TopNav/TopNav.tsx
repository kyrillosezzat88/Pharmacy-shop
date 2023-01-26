import './TopNav.scss';
import { User } from 'react-feather'
const TopNav = () => {
    return (
        <nav className='bg-primary text-white py-3 hidden md:flex'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <p className='text-sm'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
                    <span className='font-PtsBold text-sm flex items-center'> <User /> My account</span>
                </div>
            </div>
        </nav>
    )
}

export default TopNav