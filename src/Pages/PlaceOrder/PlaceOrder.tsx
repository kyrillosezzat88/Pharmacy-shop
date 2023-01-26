import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PlaceOrder.scss';
import { ProductPorpsTypes } from '../../Components/ProductCard/ProductCard.types';
const PlaceOrder = () => {
    const { Orders, Total } = useSelector((state: any) => state.Order)
    const navigate = useNavigate()
    useEffect(() => {
        if (!Orders.length) navigate('/')
    }, [Orders, Orders.length, navigate]);
    return (
        <section className="PlaceOrder ">
            <div className="container">
                <h2 className='PlaceOrder_message'>Thank you. Your order has been received.</h2>
                <ul className='PlaceOrder_header'>
                    <li>
                        <span>ORDER NUMBER:</span>
                        <h5>29442345</h5>
                    </li>
                    <li>
                        <span>DATE:</span>
                        <h5>{new Date().toDateString()}</h5>
                    </li>
                    <li>
                        <span>TOTAL:</span>
                        <h5>{Total}$</h5>
                    </li>
                    <li>
                        <span>PAYMENT METHOD:</span>
                        <h5>Bank Statment</h5>
                    </li>
                </ul>
                <div className="PlaceOrder_details">
                    <h2 className='title'>Order Details</h2>
                    <table>
                        <thead>
                            <th>Product</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {Orders.map((pro: ProductPorpsTypes) =>
                                <tr>
                                    <td>{pro.name}</td>
                                    <td>{pro.price * (pro.Qty ? pro.Qty : 1)}$</td>
                                </tr>
                            )}
                            <tr>
                                <td className='tdCustome'>SubTotal</td>
                                <td className='tdCustome'>{Total}$</td>
                            </tr>
                            <tr>
                                <td className='tdCustome'>Shipping</td>
                                <td className='tdCustome'>0$</td>
                            </tr>
                            <tr>
                                <td className='tdCustome'>Payment method:</td>
                                <td className='tdCustome'>Direct bank transfer</td>
                            </tr>
                            <tr>
                                <td className='tdCustome'>Total</td>
                                <td className='tdCustome'>{Total}$</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to='/shop' className='btn-tertiary'>Continue Shopping</Link>
                </div>
            </div>
        </section>
    )
}

export default PlaceOrder