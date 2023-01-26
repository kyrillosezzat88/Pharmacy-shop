import { useSelector, useDispatch } from "react-redux"
import { X } from 'react-feather'
import { RemoveFromCart } from "../../Store/Slices/CartSlice";
import { Link } from "react-router-dom";
const CartMenu = () => {
    const dispatch = useDispatch()
    const { Cart, Total } = useSelector((state: any) => state.Cart);
    return (
        <div className="CartMenu w-[300px] shadow-md border rounded-lg p-2 absolute top-[20px] right-0 bg-white z-20" onClick={e => e.stopPropagation()}>
            {Cart.length ? <>
                {Cart.map((pro: any) =>
                    <div className="flex gap-4 border-b p-2 py-3" key={pro.id}>
                        <img src={pro.image} alt={pro.name} width="72px" className="rounded-xl" />
                        <div className="w-full">
                            <div className="flex justify-between w-full">
                                <h2 className="text-sm text-primary_dark font-PtsBold w-3/4">{pro.name}</h2>
                                <X size={16} onClick={() => dispatch(RemoveFromCart(pro))} />
                            </div>
                            <p className="text-xs text-gray-500 mt-2"><span>Qty:{pro.Qty}</span> - <span>{pro.price}$</span></p>
                        </div>
                    </div>
                )}
                <div className=" my-2 p-2">
                    <h2 className="text-primary_dark font-PtsBold">Subtotal: ${Total}</h2>
                    <div className="flex justify-between gap-4 mt-2">
                        <Link to='/checkout' className="btn-tertiary w-full">Checkout</Link>
                        <Link to='/cart' className="btn-secondary w-full">View Cart</Link>
                    </div>
                </div>
            </> :
                <p className="text-gray-500 p-2 px-4 ">No products in the cart.</p>
            }
        </div>
    )
}

export default CartMenu