import Select from "../Form/Select/Select"
import './search.scss'
const Search = () => {
    const CategoriesList = [
        { title: "CategoryOne", id: 1 },
        { title: "CategoryTwo", id: 2 },
        { title: "CategoryThree", id: 3 },
        { title: "CategoryFour", id: 4 },
    ]
    return (
        <div className="search ">
            <div className="search_content">
                <span className="font-PtsBold text-primary_dark text-center">Select a Product</span>
                <Select options={CategoriesList}  />
                <Select options={CategoriesList} />
                <div className="flex items-center">
                    <input type="text" placeholder="Enter SKU" className="inpt_primary h-[40px] w-full rounded-full" />
                </div>
                <button className="btn-tertiary ">Search Now</button>
            </div>
        </div>
    )
}

export default Search