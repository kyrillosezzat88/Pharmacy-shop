import './Compare.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ProductPorpsTypes } from '../../Components/ProductCard/ProductCard.types';
import { RemoveFromCompare } from '../../Store/Slices/ProductsSlice'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
const Compare = () => {
    const dispatch = useDispatch();
    const { compares } = useSelector((state: any) => state.Products)
    return (
        <section className="Compare">
            <div className="container">
                <Breadcrumb list={[{ title: "Compare", link: '/compare' }]} />
                {compares.length ?
                    <div className="  overflow-x-scroll ">
                        <div className='Compare_content w-[800px] md:w-auto'>
                            <div className={` Compare_content_titles mt-auto w-1/2 md:w-1/${compares.length + 1}`}>
                                <ul className='w-full'>
                                    <li>Rating</li>
                                    <li>Price</li>
                                    <li>Brand</li>
                                    <li>Category</li>
                                </ul>
                            </div>
                            {compares.map((pro: ProductPorpsTypes) =>
                                <div className={` Compare_content_info w-1/2 md:w-1/${compares.length + 1}`}>
                                    <div className='mb-6'>
                                        <img src={pro.image} alt={pro.name} width='100%' />
                                        <h2 className='Compare_content_info_title'>{pro.name}</h2>
                                        <div className='flex flex-wrap md:flex-nowrap gap-2'>
                                            <Link to={`/products/${pro.id}`} className='btn-primary-light w-full'>More Details</Link>
                                            <button className='btn-tertiary w-full' onClick={() => dispatch(RemoveFromCompare(pro))}>Remove</button>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>{pro.rate}</li>
                                        <li>{pro.price} $</li>
                                        <li>{pro.Brand}</li>
                                        <li>{pro.category}</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    <p className='shadow p-6 border rounded-md font-PtsReg text-primary_dark '>No products found to compare</p>
                }
            </div>
        </section>
    )
}

export default Compare