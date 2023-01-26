import { useState } from 'react'
import './ProductInfo.scss'
import { ProductInfoTabsProps } from './ProductInfoTabs.types'
const ProductInfoTabs = ({ tabs }: ProductInfoTabsProps) => {
    const [ActiveTab, setActicveTab] = useState<number>(0);
    return (
        <div className="ProductInfoTabs">
            <ul>
                {tabs.map((itm, index) => <li className={index === ActiveTab ? "active" : ""} key={index} onClick={() => setActicveTab(index)}>{itm.title}</li>)}
            </ul>
            <p>{tabs.map((itm, index) => index === ActiveTab ? itm.description : "")}</p>
        </div>
    )
}

export default ProductInfoTabs