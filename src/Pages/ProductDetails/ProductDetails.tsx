import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { ReactComponent as StarIcon } from '../../Assets/Images/icons/star.svg'
import { ReactComponent as StarFilledIcon } from '../../Assets/Images/icons/star-filled.svg'
import { Check, ShoppingCart, Heart, Repeat, Mail } from 'react-feather'
import './ProductDetails.scss'
import { Carousel } from 'react-responsive-carousel'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { ProductPorpsTypes } from '../../Components/ProductCard/ProductCard.types'
import { AddToCart } from '../../Store/Slices/CartSlice'
import { AddToWishlist, AddToCompares } from '../../Store/Slices/ProductsSlice'
import ProductInfoTabs from '../../Components/ProductInfoTabs/ProductInfoTabs'
import Reviews from '../../Components/Reviews/Reviews'
const ProductDetails = () => {
    const dispatch = useDispatch();
    const { products, relatedProducts } = useSelector((state: any) => state.Products)
    const { id } = useParams();
    const [Product, setProduct] = useState({ ...products.find((pro: ProductPorpsTypes) => pro.id === id), Qty: 1 });
    const BreadcrumbList = [{ title: "Shop", link: "/shop" }, { title: Product.category, link: `/shop` }, { title: Product.name, link: `/products/${Product.id}` }]
    const Tabs = [
        {
            title: "Description",
            description: <div className='text-sm text-gray-500'>
                <p className='mb-5'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
            </div>
        },
        {
            title: "Additional Info",
            description: <table className='w-full shadow-md border'>
                <tbody>
                    {Object.keys(Product.additionalInfo).map(info =>
                        <tr className='border-b'>
                            <td className='w-1/3 px-4 py-3 bg-gray-100'>{info}</td>
                            <td className='w-2/3  px-4 py-3'>{Product.additionalInfo[info]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        },
        {
            title: `Reviews (${Product.reviews.length})`,
            description: <Reviews reviews={Product.reviews} />
        }
    ]
    return (
        <section className='ProductDetails'>
            <div className="container">
                <Breadcrumb list={BreadcrumbList} />
                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                    <div className='w-full md:w-2/5'>
                        <img src={Product.image} alt="Product" width='100%' />
                    </div>
                    <div className='w-full md:w-2/5'>
                        <h1 className='mb-2 font-PtsBold  text-primary_dark text-lg md:text-2xl'>Vitamin C 500mg Sugarless Tab X 300</h1>
                        {Product.rate &&
                            <div className="rate flex items-center mb-4">
                                {Array(Product.rate).fill(0).map((r, index) => <StarFilledIcon key={index} />)}
                                {Array(5 - (Product.rate)).fill(0).map((r, index) => <StarIcon key={index} />)}
                                <span className='ml-2 text-primary_dark text-sm'> (1 customer review)</span>
                            </div>
                        }
                        <hr className='mb-2' />
                        <div className='ProductDetails_description'>
                            <p className='mb-6'>{Product.description}</p>
                            <ul>
                                <li><Check size={14} /> <span className='ml-2'>3 cleaning programs</span></li>
                                <li><Check size={14} /> <span className='ml-2'>3 cleaning programs</span></li>
                                <li><Check size={14} /> <span className='ml-2'>3 cleaning programs</span></li>
                            </ul>
                        </div>
                        <hr className='mb-2' />
                        <h1 className='Price text-3xl font-PtsBold text-primary my-6'>${Product.price}</h1>
                        <div className="ProductDetails_actions">
                            <div className="ProductDetails_actions_qty">
                                <span onClick={() => setProduct({ ...Product, Qty: Product.Qty > 1 ? Product.Qty - 1 : 1 })}>-</span>
                                <input type="number" defaultValue={Product.Qty} value={Product.Qty} min={1} max={10} onChange={(e) => setProduct({ ...Product, Qty: Number(e.target.value) })} />
                                <span onClick={() => setProduct({ ...Product, Qty: Product.Qty < 10 ? Product.Qty + 1 : 10 })}>+</span>
                            </div>
                            <button className='btn-primary flex items-center' onClick={() => dispatch(AddToCart(Product))}>
                                <ShoppingCart className='mr-2' />
                                Add To Cart
                            </button>
                        </div>
                        <div className='my-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <p className='flex items-center cursor-pointer' onClick={() => dispatch(AddToWishlist(Product))}> <Heart size={16} color="#15A9E3" /> <span className='text-sm ml-2 underline'>Add to wishlist </span></p>
                            <p className='flex items-center cursor-pointer' onClick={() => dispatch(AddToCompares(Product))} > <Repeat size={16} color="#15A9E3" /> <span className='text-sm ml-2 underline'>Add to compare</span></p>
                            <p className='flex items-center cursor-pointer'> <Mail size={16} color="#15A9E3" /> <span className='text-sm ml-2 underline text-primary_dark hover:text-primary'>Ask about product</span></p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 h-full border-2 border-tertiary p-4 rounded-xl'>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            swipeable={true}
                            emulateTouch={true}
                            showArrows={false}
                            autoPlay
                            infiniteLoop
                        >
                            {relatedProducts.map((pro: ProductPorpsTypes) =>
                                <ProductCard id={pro.id} name={pro.name} price={pro.price} image={pro.image} rate={pro.rate} category={pro.category} BtnAction={() => dispatch(AddToCart(pro))} />
                            )}
                        </Carousel>
                    </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap'>
                    <div className='w-full md:w-4/5'>
                        <ProductInfoTabs tabs={Tabs} />
                        <div className='Related_Products my-[100px]'>
                            <h3 className='title'>Related Products</h3>
                            <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                                {products.map((pro: ProductPorpsTypes) =>
                                    <ProductCard key={pro.id} id={pro.id} name={pro.name} price={pro.price} image={pro.image} rate={pro.rate} category={pro.category} BtnAction={() => dispatch(AddToCart(pro))} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5'></div>
                </div>
            </div>
        </section >
    )
}

export default ProductDetails