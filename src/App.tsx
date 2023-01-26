import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Shop from './Pages/Shop/Shop';
import TopNav from './Components/TopNav/TopNav';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ViewCart from './Pages/Cart/ViewCart';
import Checkout from './Pages/Checkout/Checkout';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Compare from './Pages/Compare/Compare';
import Wishlist from './Pages/Wishlist/Wishlist';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <TopNav />
        <div className="container">
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<ViewCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
