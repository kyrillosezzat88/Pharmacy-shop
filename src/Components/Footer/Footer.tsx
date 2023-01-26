import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail } from 'react-feather'
import Logo from '../../Assets/Images/logo.png'
import CopyRights from './CopyRights'
import './Footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_content grid grid-cols-1 md:grid-cols-4 gap-6 md:place-items-center" >
                    <div>
                        <img src={Logo} alt="Logo" />
                        <p className='text-primary_dark my-3 text-sm leading-[26px]'>
                            70 Washington Square South,<br />
                            New York, NY 10012, United States
                        </p>
                        <div className="footer_social_links ">
                            <a rel="noreferrer" href="https://www.facebook.com" target='_blank' ><Facebook size={18} /></a>
                            <a rel="noreferrer" href="https://www.twitter.com" target='_blank' ><Twitter size={18} /></a>
                            <a rel="noreferrer" href="https://www.youtube.com" target='_blank' ><Youtube size={18} /></a>
                            <a rel="noreferrer" href="https://www.instgram.com" target='_blank' ><Instagram size={18} /></a>
                            <a rel="noreferrer" href="https://www.linkedin.com" target='_blank' ><Linkedin size={18} /></a>
                        </div>
                    </div>
                    <div className='md:border-l-2 md:pl-10'>
                        <h2 className='footer_title'>Need help</h2>
                        <h1 className='footer_phone'>9876 788 - 1234 -888</h1>
                        <span className='text-primary_dark text-sm '>Monday - Friday: 9:00 - 20:00<br />
                            Saturday: 9:00 - 15:00
                        </span>
                        <a href='mailto:inbox@propharm.com' className='footer_email'><Mail size={18} /> <span className='text-primary ml-2 text-sm'>inbox@propharm.com</span></a>
                    </div>
                    <div >
                        <h2 className='footer_title'>Information</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Sales</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='footer_title'>Account</h2>
                        <ul>
                            <li>Dashboard</li>
                            <li>My Orders</li>
                            <li>Acount Details</li>
                            <li>Returns</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>
                <CopyRights />
            </div>
        </footer>
    )
}

export default Footer