import './Hero.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SlideOne from '../../Assets/Images/slider/slide1_back.jpg'
import SlideTwo from '../../Assets/Images/slider/slide2_back.jpg'
import SlideOnePro1 from '../../Assets/Images/slider/slider-1-as7.png'
import SlideOnePro2 from '../../Assets/Images/slider/slider-1-as8.png';
import DiscountLabel from '../../Assets/Images/slider/label-green.png'
import { ChevronRight } from 'react-feather'
import { useViewport } from '../../CustomHooks/ViewPort';
import Search from '../Search/Search';
const Hero = () => {
  const { isMobile } = useViewport();
  return (
    <section className="Hero my-6">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={isMobile}
        swipeable={true}
        stopOnHover={true}
        animationHandler={isMobile ? "slide" : "fade"}
        showArrows={!isMobile}

      >
        <div className='slide'>
          <img src={SlideOne} alt='slideOne' className='slide_background' />
          <div className='slide_content '>
            <div className='w-1/2'>
              <p className='slide_content_subtitle'>For all family members </p>
              <h3 className='slide_content_title'>Ultra organic <br />  face cream </h3>
              {!isMobile && <button className='btn-primary-light mt-4 z-10 flex items-center'>Buy it Now <ChevronRight size={20} /></button>}
            </div>
            <div className='slide_content_Products_img w-full md:w-1/2'>
              <img src={SlideOnePro2} alt="product" />
              <img src={SlideOnePro1} alt="product" />
              <img src={DiscountLabel} alt="Discount" />
            </div>
          </div>
        </div>
        <div className='slide'>
          <img src={SlideTwo} alt='SlideTwo' className='slide_background' />
          <div className='slide_content '>
            <div className='w-1/2'>
              <p className='slide_content_subtitle'>Pyridoxine Vitamin B6  </p>
              <h3 className='slide_content_title'>Vitamins &  <br /> Supplements </h3>
              {!isMobile && <button className='btn-primary-light mt-4 z-10 flex items-center'>Buy it Now <ChevronRight size={20} /></button>}
            </div>
            <div className='slide_content_Products_img w-full md:w-1/2'>
              <img src={SlideOnePro2} alt="product" />
              <img src={SlideOnePro1} alt="product" />
              <img src={DiscountLabel} alt="Discount" />
            </div>
          </div>
        </div>
      </Carousel>
      <Search />
    </section>
  )
}

export default Hero