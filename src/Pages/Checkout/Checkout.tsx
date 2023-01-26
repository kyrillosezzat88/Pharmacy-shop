import { ChangeEvent, useEffect, useState } from 'react'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import Select from "../../Components/Form/Select/Select"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { ProductPorpsTypes } from '../../Components/ProductCard/ProductCard.types'
import { placeOrder } from '../../Store/Slices/OrderSlice'
import { ThunkDispatch } from '@reduxjs/toolkit'
const Checkout = () => {
    const disaptch = useDispatch<ThunkDispatch<any, any, any>>();
    const navigate = useNavigate()
    const { Cart, Total } = useSelector((state: any) => state.Cart)
    const BreadcrumbList = [{ title: "Shop", link: "/shop" }, { title: 'Checkout', link: `/checkout` }];
    const [OrderData, setOrderData] = useState<any>({ payment: "bank" })
    useEffect(() => {
        if (!Cart.length) navigate('/')
    }, [Cart.length, navigate]);
    const HandleData = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderData({ ...OrderData, [e.target.name]: e.target.value })
    }
    return (
        <section>
            <div className="container">
                <Breadcrumb list={BreadcrumbList} />
                <div className="flex flex-wrap md:flex-nowrap py-[30px] gap-10">
                    <div className="w-full md:w-1/2 bg-primary_light px-6 py-8 rounded-lg ">
                        <h1 className="text-primary_dark font-PtsBold text-2xl">Billing details</h1>
                        <div className="my-3">
                            <label htmlFor="Firstname">FirstName*</label>
                            <input type="text" id='Firstname' name='FirstName' onChange={HandleData} required className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " />
                        </div>
                        <div className="my-3">
                            <label htmlFor="LastName">LastName*</label>
                            <input type="text" id='LastName' required className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='LastName' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="company">Company name (optional):</label>
                            <input type="text" id='company' className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='Company' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="country">Country / Region *</label>
                            <Select className="block w-full mt-2" options={[{ title: "Egypt", id: 1 }, { title: "USA", id: 2 }]} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="Address">Street address *</label>
                            <input required type="text" placeholder="House number and street name" id='Address' className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='Address' onChange={HandleData} />
                            <input required type="text" placeholder="Appartment,suite,unit,etc (optional)" className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='Appartment' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="city">Town / City *</label>
                            <input required type="text" id='city' className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='City' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="ZIP">Postcode / ZIP *</label>
                            <input required type="text" id='ZIP' className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='Zip' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="Email">Email address *</label>
                            <input required type="email" id='Email' className="bg-white mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " name='Email' onChange={HandleData} />
                        </div>
                        <div className="my-3">
                            <label htmlFor="info">Additional Info</label>
                            <textarea name="info" id="info" cols={30} rows={5} placeholder="Notes about your order, e.g. special notes for delivery." className="bg-white resize-none mt-2 rounded-md w-full p-2 outline-none border focus:border-tertiary " ></textarea>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="title">Your Order</h2>
                        <div>
                            <div className='flex justify-between text-sm font-PtsBold px-4'>
                                <span>Product</span>
                                <span>Subtotal</span>
                            </div>
                            <div className=' shadow-sm rounded-md border p-4 my-4'>
                                {Cart.map((pro: ProductPorpsTypes) =>
                                    <div className='flex justify-between border-b py-2' key={pro.id}>
                                        <span>{pro.name}</span>
                                        <span>{pro.price * (pro.Qty ? pro.Qty : 1)} $</span>
                                    </div>
                                )}
                                <div className='flex justify-between py-2 text-primary_dark font-PtsBold border-b' >
                                    <span>SubTotal</span>
                                    <span>{Total} $</span>
                                </div>
                                <div className='flex justify-between py-2 text-primary_dark font-PtsBold border-b' >
                                    <span>Shipping</span>
                                    <span>0$</span>
                                </div>
                                <div className='flex justify-between py-2 text-primary_dark font-PtsBold' >
                                    <span className=' text-xl'>Total</span>
                                    <span>{Total} $</span>
                                </div>
                            </div>
                        </div>
                        <div className='accordion border shadow p-3 rounded-lg'>
                            <div className='mb-3 border-b pb-3'>
                                <div className='flex items-center mb-2'>
                                    <input type='radio' id='Bank' name='payment' checked={OrderData.payment === "bank"} onChange={HandleData} value="bank" />
                                    <label htmlFor="Bank" className='ml-2 text-sm'>Direct bank transfer</label>
                                </div>
                                <p className={`text-sm bg-primary_light text-primary p-3 px-4 rounded-lg ${OrderData.payment !== "bank" && "hidden"}`}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>
                            <div className='mb-2 pb-2'>
                                <div className='flex items-center mb-2'>
                                    <input type='radio' id='Cash' name='payment' onChange={HandleData} value="cash" />
                                    <label htmlFor="Cash" className='ml-2 text-sm'>Cash on delivery</label>
                                </div>
                                <p className={`text-sm bg-primary_light text-primary p-3 px-4 rounded-lg ${OrderData.payment !== "cash" && "hidden"}`}>Pay with cash upon delivery.</p>
                            </div>
                        </div>
                        <button type='submit' className='btn-tertiary mt-6' onClick={() => disaptch(placeOrder()).then(() => navigate('/placeorder'))}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout