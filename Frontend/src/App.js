import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Account from './Pages/Account';
import Error404 from './Pages/Error404';
import Wish from './Pages/Wish';
import 'aos/dist/aos.css';
import Updatepass from './Pages/Updatepass';
import AddProduct from './Pages/AddProduct';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/account' element={<Account />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/updatepass' element={<Updatepass />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
