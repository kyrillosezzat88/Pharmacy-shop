import { Truck, Archive } from 'react-feather'
import { ReactComponent as WalletIcon } from '../../Assets/Images/icons/wallet.svg'
const Benefits = () => {
  return (
    <section className="Benefits grid grid-cols-1 md:grid-cols-3 gap-6 my-[60px]">
      <div className='flex items-center justify-center bg-gray-50 rounded-xl p-6'>
        <WalletIcon />
        <span className='ml-2 font-PtsBold'>100% Money back</span>
      </div>
      <div className='flex items-center justify-center bg-gray-50 rounded-xl p-6'>
        <Archive size={32} color='#15A9E3' />
        <span className='ml-2 font-PtsBold'>Non-contact shipping</span>
      </div>
      <div className='flex items-center justify-center bg-gray-50 rounded-xl p-6'>
        <Truck size={32} color='#15A9E3' />
        <span className='ml-2 font-PtsBold'>Free delivery over $200</span>
      </div>
    </section>
  )
}

export default Benefits