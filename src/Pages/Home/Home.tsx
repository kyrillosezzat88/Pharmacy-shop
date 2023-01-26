import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../Components/Banner/Banner'
import CategoriesLinks from '../../Components/CategorieslLinks/CategoriesLinks'
import GridBanners from '../../Components/GridBanners/GridBanners'
import Hero from '../../Components/Hero/Hero'
import PopulareCategories from '../../Components/PopularCategories/PopulareCategories'
import BannerBackground from '../../Assets/Images/slider/slide1_back.jpg';
import BannerImage from '../../Assets/Images/product-banner.png'
import ProductCard from '../../Components/ProductCard/ProductCard'
import BannerFaceMask from '../../Assets/Images/banners/banner-1.jpg'
import BannerCovid from '../../Assets/Images/banners/banner-2.jpg'
import ProductThumbnail from '../../Components/ProductThumbnail/ProductThumbnail'
import ProductImg from '../../Assets/Images/product-1.jpg'
import Benefits from '../../Components/Benefits/Benefits'
import { AddToCart } from '../../Store/Slices/CartSlice'
import { ProductPorpsTypes } from '../../Components/ProductCard/ProductCard.types'
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.Products)
  return (
    <section className='Home'>
      <div className="container">
        <Hero />
        <CategoriesLinks />
        {/* <GridBanners /> */}
        <PopulareCategories />
        <Banner
          background={BannerBackground}
          image={BannerImage}
          BannerText="Save unto 10% extra enjoy FREE delivery with PLUS membership"
          badge='Newest Products'
          buttonShow={true}
          buttonLink='/'
          className='justify-center my-[40px]'
        />
        <div className='Featured_Products'>
          <h3 className='title text-center'>Featured Products</h3>
          <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((pro: ProductPorpsTypes) =>
              <ProductCard key={pro.id} id={pro.id} name={pro.name} price={pro.price} image={pro.image} rate={pro.rate} category={pro.category} BtnAction={() => dispatch(AddToCart(pro))} />
            )}
          </div>
        </div>
        <div className="speical-offers">
          <h3 className='title text-center'>Special Offers</h3>
          <div className='flex flex-wrap md:flex-nowrap gap-6'>
            <Banner
              background={BannerFaceMask}
              BannerText="Face Mask"
              badge='From $0.99'
              buttonShow={true}
              buttonLink='/'
              Title='Breathable'
              className='w-full md:w-1/2 px-12  h-[270px]'
            />
            <Banner
              background={BannerCovid}
              BannerText="Get it now 45% Off"
              badge='From $0.99'
              buttonShow={true}
              buttonLink='/'
              Title='Covid 19 pack'
              className='w-full md:w-1/2 px-12  h-[270px]'
            />
          </div>
        </div>
        <div className='MoreProducts border-b py-12 '>
          <h3 className='title text-center'>More to love</h3>
          <div className="products grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' rate={3} />
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' />
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' />
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' />
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' rate={5} />
            <ProductThumbnail image={ProductImg} name="Gaia Biodegradable Nappy Bags" price={9.95} ProLink='/' rate={2} />
          </div>
        </div>
        <Benefits />
        <PopulareCategories />
      </div>
    </section>
  )
}

export default Home