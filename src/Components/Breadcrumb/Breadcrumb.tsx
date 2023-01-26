import { BreadcrumbPropsType } from "./Breadcrumb.types"
import { ChevronRight } from "react-feather"
import './Breadcrumb.scss'
import { Link } from "react-router-dom"
const Breadcrumb = ({ list }: BreadcrumbPropsType) => {
    return (
        <ul className=" Breadcrumb flex flex-wrap md:flex-nowrap leading-5 items-center text-sm text-primary_dark">
            <li><Link to='/' className="flex items-center">Home <ChevronRight size={12} /></Link> </li>
            {list.map((itm, index) =>
                <li key={index}><Link to={itm.link} className="flex items-center">{itm.title} {index !== list.length - 1 && <ChevronRight size={12} />}</Link></li>
            )}
        </ul>
    )
}

export default Breadcrumb