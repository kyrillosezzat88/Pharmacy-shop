import ProductCard from "../ProductCard/ProductCard"
import Tabs from "../Tabs/Tabs"
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Store/Slices/CartSlice";
import { ProductPorpsTypes } from "../ProductCard/ProductCard.types";
const PopulareCategories = () => {
    const { products } = useSelector((state: any) => state.Products);
    const dispatch = useDispatch()
    const pobCategories = [
        {
            id: 1,
            title: "Supplements"
        },
        {
            id: 2,
            title: "Medicine"
        },
        {
            id: 3,
            title: "Herbs"
        },
    ]
    // get clicked tap
    const HandleTabs = (id: number) => {
        console.log(id)
    }
    return (
        <section className="PopulareCategories">
            <h3 className="title text-center">Popular Categories</h3>
            <Tabs Tabs={pobCategories} HandleTabs={HandleTabs} />
            <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {products.map((pro: ProductPorpsTypes) =>
                    <ProductCard key={pro.id} id={pro.id} name={pro.name} price={pro.price} image={pro.image} rate={pro.rate} category={pro.category} BtnAction={() => dispatch(AddToCart(pro))} />
                )}
            </div>
        </section>
    )
}

export default PopulareCategories