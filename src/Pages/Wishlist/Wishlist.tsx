import { useSelector, useDispatch } from "react-redux"
import { ProductPorpsTypes } from "../../Components/ProductCard/ProductCard.types"
import { XCircle } from "react-feather"
import { RemoveFromWishlist } from "../../Store/Slices/ProductsSlice"
const Wishlist = () => {
    const dispatch = useDispatch()
    const { wishlist } = useSelector((state: any) => state.Products)
    return (
        <section className="wishlist my-[30px]">
            <div className="container">
                {wishlist.length ?
                    <div className="wishlist_content shadow rounded-md border ">
                        {wishlist.map((pro: ProductPorpsTypes) =>
                            <div className="flex justify-between items-center px-6 py-4 hover:bg-primary_light hover:transition-all transition-all " key={pro.id} >
                                <div className="flex gap-6 ">
                                    <img src={pro.image} alt={pro.name} width='80px' className="rounded-md border" />
                                    <div>
                                        <h2 className="text-base font-PtsBold text-primary_dark">{pro.name}</h2>
                                        <span className="text-primary">${pro.price}</span>
                                    </div>
                                </div>
                                <XCircle size={20} className="cursor-pointer text-primary_dark" onClick={() => dispatch(RemoveFromWishlist(pro))} />
                            </div>
                        )}
                    </div>
                    :
                    <p className='shadow p-6 border rounded-md font-PtsReg text-primary_dark '>No products found</p>
                }
            </div>
        </section>
    )
}
export default Wishlist