import Banner from "../../Components/Banner/Banner";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import Select from "../../Components/Form/Select/Select"
import BannerBackground from '../../Assets/Images/slider/slide1_back.jpg';
import BannerBackground2 from '../../Assets/Images/slider/slide6_back.jpg';
import BannerImage from '../../Assets/Images/product-banner.png'
import './Shop.scss';
import { useSelector, useDispatch } from "react-redux";
import { ProductPorpsTypes } from "../../Components/ProductCard/ProductCard.types";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AddToCart } from "../../Store/Slices/CartSlice";
const Shop = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state: any) => state.Products)
    const SortData = [
        {
            id: 1,
            title: "Defualt Sorting"
        },
        {
            id: 2,
            title: "Sort By Latest"
        },
        {
            id: 3,
            title: "Sort By Price"
        },
    ]
    return (
        <section className="Shop">
            <div className="container">
                <Breadcrumb list={[{ title: "Shop", link: '/shop' }]} />
                <div className="Shop_content flex flex-wrap md:flex-nowrap gap-6">
                    <div className="Shop_content_filter w-full md:w-1/5 hidden md:block">
                        <div className="Shop_content_filter_category">
                            <h2 className="title text-xs">Shop by Categories</h2>
                            <ul>
                                <li>Baby</li>
                                <li>Beauty</li>
                                <li>Medicines</li>
                                <li>Personal Care</li>
                                <li>Pets</li>
                                <li>Supplemets</li>
                                <li>Sports Nutritions</li>
                            </ul>
                        </div>
                        {/* <div className="Shop_content_filter_price relative">
                            <h2 className="title text-xs">Price</h2>
                        </div> */}
                        <div className="Shop_content_filter_brand">
                            <h2 className="title text-xs">Brand</h2>
                            <ul>
                                <li>Baby</li>
                                <li>Beauty</li>
                                <li>Medicines</li>
                                <li>Personal Care</li>
                                <li>Pets</li>
                                <li>Supplemets</li>
                                <li>Sports Nutritions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Shop_content_Products w-full md:w-4/5">
                        <div className="sort flex justify-between flex-wrap items-center">
                            <Select options={SortData} className=" w-full md:w-[200px]" />
                            <span className="text-sm text-gray-500 text-center md:text-right w-full md:w-auto my-3 md:my-0"> Showing 1–28 of 64 results</span>
                        </div>
                        <div className="my-12 Banners flex flex-wrap md:flex-nowrap gap-5">
                            <Banner
                                background={BannerBackground}
                                BannerText="Supplements"
                                badge='New'
                                buttonShow={true}
                                buttonLink='/'
                                Title='Vitamins &'
                                className='w-full md:w-1/2 px-12  md:h-[240px]'
                                image={BannerImage}
                            />
                            <Banner
                                background={BannerBackground}
                                BannerText="Supplements"
                                badge='New'
                                buttonShow={true}
                                buttonLink='/'
                                Title='Vitamins &'
                                className='w-full md:w-1/2 px-12  md:h-[240px]'
                                image={BannerImage}
                            />
                        </div>
                        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                            {products.map((pro: ProductPorpsTypes) =>
                                <ProductCard key={pro.id} id={pro.id} name={pro.name} price={pro.price} image={pro.image} rate={pro.rate} category={pro.category} BtnAction={() => dispatch(AddToCart(pro))} />
                            )}
                        </div>
                        <Banner
                            background={BannerBackground2}
                            image={BannerImage}
                            BannerText="Save unto 10% extra enjoy FREE delivery with PLUS membership"
                            badge='Newest Products'
                            buttonShow={true}
                            buttonLink='/'
                            className='justify-center my-[40px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop