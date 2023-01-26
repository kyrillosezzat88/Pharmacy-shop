import Baby from '../../Assets/Images/icons/socks.svg';
import Care from '../../Assets/Images/icons/Care.svg';
import Grocery from '../../Assets/Images/icons/Grocery.svg';
import Health from '../../Assets/Images/icons/Health.svg';
import Makeup from '../../Assets/Images/icons/Makeup.svg';
import Medicine from '../../Assets/Images/icons/Medicine.svg';
import { Link } from 'react-router-dom';

const CategoriesLinks = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-6">
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Baby} alt="Baby" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Baby</span>
        </Link>
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Care} alt="Care" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Beauty</span>
        </Link>
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Grocery} alt="Grocery" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Grocery</span>
        </Link>
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Health} alt="Health" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Health</span>
        </Link>
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Makeup} alt="Makeup" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Makeup</span>
        </Link>
        <Link to={'/'} className="flex items-center justify-center py-2">
          <img src={Medicine} alt="Medicine" width='48px' />
          <span className='ml-4 font-PtsBold text-primary_dark'>Medicine</span>
        </Link>
      </div>
    </section>
  )
}

export default CategoriesLinks