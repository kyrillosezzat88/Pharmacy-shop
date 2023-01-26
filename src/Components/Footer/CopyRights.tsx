import Payments from '../../Assets/Images/payments.png'
const CopyRights = () => {
    return (
        <div className="CopyRight flex md:justify-between flex-wrap items-center md:px-12 py-6  mt-12 border-t border-primary_light">
            <span className='text-primary_dark text-sm mb-4 md:mb-0'>Copyright 2022 Propharm. All Rights Reserved</span>
            <img src={Payments} alt="Payments" />
        </div>
    )
}

export default CopyRights