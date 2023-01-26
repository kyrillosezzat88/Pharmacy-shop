import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import { X } from "react-feather"
import { useSelector, useDispatch } from "react-redux"
import { ProductPorpsTypes } from "../../Components/ProductCard/ProductCard.types";
import { RemoveFromCart, ChangeQty } from "../../Store/Slices/CartSlice";
import EmptyCart from '../../Assets/Images/Empty-pana.png'
import { Link } from "react-router-dom";
const ViewCart = () => {
    const dispatch = useDispatch();
    const { Cart, Total } = useSelector((state: any) => state.Cart);
    const BreadcrumbList = [{ title: "Shop", link: "/shop" }, { title: 'Cart', link: `/cart` }]
    return (
        <section className="ViewCart">
            <div className="container">
                <Breadcrumb list={BreadcrumbList} />
                {Cart.length ?
                    <div className="ViewCart_content flex flex-wrap md:flex-nowrap gap-6 py-[30px]">
                        <div className="ViewCart_content_products w-full md:w-3/4 ">
                            <div className="shadow-sm p-4 px-6 rounded-md border w-full">
                                <table className="w-full text-left ">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Cart.map((pro: ProductPorpsTypes, index: number) =>
                                            <tr key={pro.id} className={Cart.length - 1 !== index ? "border-b" : ""}>
                                                <td className="flex items-center my-2">
                                                    <X size={25} className="mr-6 bg-primary_light p-1 rounded-full cursor-pointer transition-all hover:bg-primary_dark hover:text-primary_light" onClick={() => dispatch(RemoveFromCart(pro))} />
                                                    <img src={pro.image} alt="" width='100px' />
                                                </td>
                                                <td>{pro.name}</td>
                                                <td>{pro.price}</td>
                                                <td><input type="number" defaultValue={pro.Qty} className="inpt bg-gray-100 p-2 rounded-lg text-primary_dark font-PtsBold" min={1} max={10} onChange={(e) => dispatch(ChangeQty({ ...pro, Qty: Number(e.target.value) }))} /></td>
                                                <td>{pro.price * (pro.Qty ? pro.Qty : 1)} $</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6">
                                <input placeholder="Coupon code" type="text" className="w-[300px] bg-primary_light rounded-full outline-none p-2 px-4" />
                                <button className="btn-tertiary">Apply coupon</button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 py-4">
                            <h2 className="text-primary_dark font-PtsBold text-lg mb-4">Cart Totals</h2>
                            <div className="shadow-md p-2 rounded-md border">
                                <div className="flex justify-between items-center border-b p-3">
                                    <span>Subtotal</span>
                                    <span>{Total}$</span>
                                </div>
                                <div className="flex justify-between items-center border-b p-3">
                                    <span>Shipping</span>
                                    <span>0$</span>
                                </div>
                                <div className="flex justify-between items-center p-3 text-primary_dark font-PtsBold text-lg">
                                    <span>Total</span>
                                    <span>{Total}$</span>
                                </div>
                                <Link to='/checkout' className="btn-tertiary mt-2">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center">
                        <img src={EmptyCart} alt="Empty Cart" width='340px' />
                        <h2 className="text-primary_dark font-PtsBold text-2xl mb-2">Your cart is currently empty.</h2>
                        <Link to='/shop' className="btn-tertiary">Shop Now</Link>
                    </div>
                }
            </div>
        </section>
    )
}

export default ViewCart