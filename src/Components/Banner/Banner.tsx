import { Link } from 'react-router-dom'
import { BannerPropsTypes } from './Banner.types'

const Banner = ({ background, image, BannerText, badge, buttonLink, buttonShow, className, Title }: BannerPropsTypes) => {
  return (
    <section className={`Banner flex flex-wrap md:flex-nowrap items-center p-6 rounded-xl bg-center bg-cover ${className}`} style={{ backgroundImage: `url(${background})` }}>
      {image && <div className='w-full md:w-auto md:hidden mb-4'>
        <img src={image} alt="BannerImage" />
      </div>}
      <div className='w-full md:w-auto'>
        <span className="bg-tertiary rounded-full text-white px-4 py-1">{badge}</span>
        {Title && <h3 className='text-[28px] text-primary_dark font-PtsBold mt-2'>{Title}</h3>}
        <p className={!Title ? 'py-4' : "pb-4 text-[28px]"}>{BannerText}</p>
        {buttonShow && <Link to={buttonLink ? buttonLink : ""} className="btn-primary-dark">Show Now</Link>}
      </div>
      {image && <div className='w-full md:w-auto hidden md:block'>
        <img src={image} alt="BannerImage" />
      </div>}
    </section >
  )
}

export default Banner